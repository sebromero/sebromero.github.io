const DetailsCard = (props) => {
    return (
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
                <div className="extra">
                    <p className="date">
                    By <a href="#">{props.subtitle}</a>
                    <span>{props.date}</span>
                    </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title">{props.title}</h3>
                {/* END TITLE */}

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
    );
}

export default DetailsCard;