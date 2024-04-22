import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";

const ImageCard = (props) => {
    return (
        <div className="inner">
            <div className="entry tokyo_tm_portfolio_animation_wrap">
                <Image
                width={props.width}
                height={props.height}
                src={props.image}
                alt={props.title}
                data-tip
                data-for={props.id}
                data-tooltip-id={props.id}
                onClick={props.onClick}
                />

                <ReactTooltip
                id={props.id}
                place="bottom"
                variant="light"
                float
                render={() => (
                    <div className="tooltip-wrapper">
                        <h5>{props.title}</h5>
                        <span>{props.subtitle}</span>
                    </div>
                )}
                />
            </div>
        </div>
    );
}

export default ImageCard;