import Link from "next/link";

const DetailsCard = (props) => {
    return (
        <Link href={props.href ? props.href : "" }>
            <div className="details-card" onClick={props.onClick}>
                <div className="image">
                    <div
                        className="main "
                        style={{
                        backgroundImage: `url(${props.image})`,
                        }}
                    ></div>
                </div>
                {/* END IMAGE */}
                <div className="details">
                    <h3 className="title">{props.title}</h3>
                    {/* END TITLE */}
                    
                    <div className="extra">
                        <p className="date">
                            {props.subtitle}
                            <span>{props.date}</span>
                        </p>
                    </div>
                    {/* END EXTRA */}


                    {/* START READ MORE BUTTON */} 
                    { props.showReadMore &&    
                        <div className="tokyo_tm_read_more">
                            <div className="read-more">
                            <span>Read More</span>
                            </div>
                        </div>
                    }
                    {/* END READ MORE BUTTON */}
                </div>
                {/* END DETAILS */}
            </div>
        </Link>
    );
}

export default DetailsCard;