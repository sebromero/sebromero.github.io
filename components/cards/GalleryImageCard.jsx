import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";
import { Item } from "react-photoswipe-gallery";

const GalleryImageCard = (props) => {
    return (
        <div className="inner">
            <div className="entry tokyo_tm_portfolio_animation_wrap">
                <Item
                    original={props.image}
                    thumbnail={props.thumbnail}
                    width={props.sourceWidth}
                    height={props.sourceHeight}
                >
                    {({ ref, open }) => (
                        <Image
                        width={props.width}
                        height={props.height}
                        srl_gallery_image="true"
                        src={props.thumbnail}
                        alt={props.title}
                        data-tip
                        data-for={props.id}
                        role="button"
                        data-tooltip-id={props.id}
                        ref={ref}
                        onClick={open}
                        />
                    )}
                </Item>
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

export default GalleryImageCard;