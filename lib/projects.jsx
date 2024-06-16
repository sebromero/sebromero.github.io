import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { sort } from '@/data/newsData';

const PROJECTS_PATH = "projects";
const PROJECTS_ROOT_PATH = 'public/' + PROJECTS_PATH + '/';

function getProjectsPath() {
    return PROJECTS_ROOT_PATH;
}

function getAssetPath(projectID){
    return PROJECTS_PATH + '/' + projectID + "/assets/";
}

function getProjectMDXFilePath(projectID){
    return path.join(getProjectsPath(), projectID, 'project.mdx');
    // Find MDX file in project folder
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
            subtitle : matterResult.data.subtitle,
            date_end: matterResult.data.date_end,
            title_image: getAssetPath(projectFolder) + matterResult.data.title_image,
            slug: projectFolder,
        };
    });

    return sortProjects(projectsData);
}

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
        content : serialized,
        filePath : filepath        
    };
}
