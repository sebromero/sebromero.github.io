import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

const PROJECTS_PATH = "projects";
const PROJECTS_ROOT_PATH = path.join('public', PROJECTS_PATH);

function getAssetPath(projectID){
    // Make path absolute to avoid cascading slashes when using relative links    
    return path.join("/", PROJECTS_PATH, projectID, "assets");
}

function getProjectMDXFilePath(projectID){
    return path.join(PROJECTS_ROOT_PATH, projectID, 'project.mdx');
}

function sortProjects(projectsData) {
    projectsData.sort((a, b) => {
        // Extract month and year from the date string which is in the format mm/yyyy
        const [aMonth, aYear] = a.date_end.split('/');
        const [bMonth, bYear] = b.date_end.split('/');
        
        // Create Date objects using the extracted month and year
        const aDate = new Date(aYear, aMonth - 1);
        const bDate = new Date(bYear, bMonth - 1);
        
        // Sort first by date (newest first) then by title        
        return bDate - aDate || a.title.localeCompare(b.title);        
    });
    return projectsData;
}

/**
 * 
 * @returns {Array} An array of objects containing project data.
 * The objects have the following properties:
 * - title: The title of the project.
 * - filter_categories: The categories to filter the project by.
 * - subtitle: The subtitle of the project.
 * - date_end: The date the project was completed.
 * - title_image: The path to the title image of the project.
 * - slug: The slug of the project.
 * - link: The path to the project page.
 */
export function getAllProjects() {
    let projectsFolders = fs.readdirSync(PROJECTS_ROOT_PATH);

    // Filter out non-directories
    projectsFolders = projectsFolders.filter((projectFolder) => {
        const projectPath = path.join(PROJECTS_ROOT_PATH, projectFolder);
        return fs.lstatSync(projectPath).isDirectory();
    });

    let projectsData = projectsFolders.map((projectFolder) => {
        const projectPath = getProjectMDXFilePath(projectFolder);
        const fileContents = fs.readFileSync(projectPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            filter_categories: matterResult.data.filter_categories,
            subtitle : matterResult.data.subtitle,
            date_end: matterResult.data.date_end,
            title_image: path.join(getAssetPath(projectFolder), matterResult.data.title_image),
            slug: projectFolder,
            link: path.join(PROJECTS_PATH, projectFolder)
        };
    });

    return sortProjects(projectsData);
}

/**
 * 
 * @param {Number} projectID 
 * @returns The project data for the project with the given ID.
 * The object has the following properties:
 * - title: The title of the project.
 * - content: The content of the project.
 * - filePath: The path to the project MDX file.
 */
export async function getProject(projectID) {
    const filepath = getProjectMDXFilePath(projectID);

    // Read the file from the filesystem
    const rawFile = fs.readFileSync(filepath, 'utf-8');

    // Serialize the MDX content and parse the frontmatter
    const serialized = await serialize(rawFile, {
        parseFrontmatter: true,
    });

    const frontmatter = serialized.frontmatter;
    return {
        title : frontmatter.title,
        subtitle: frontmatter.subtitle,
        date_end: frontmatter.date_end,
        abstract: frontmatter.abstract,
        title_image: path.join(getAssetPath(projectID), frontmatter.title_image),      
        content : serialized,
        filePath : filepath
    };
}
