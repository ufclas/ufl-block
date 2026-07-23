import { RichText, useBlockProps } from '@wordpress/block-editor';

const deprecated = [
    {
        attributes: {
            "title": {
                "type": "string",
                "selector": "p",
                "default": "Title"
            },
            "subTitle": {
                "type": "string",
                "selector": "p",
                "default": "Text"
            },
            "link": {
                "type": "string",
                "default": ""
            },
            "linkLabel": {
                "type": "string",
                "default": "Link Text"
            },
            "hasLinkNofollow": {
                "type": "boolean",
                "default": false
            },
            "openNewTab": {
                "type": "boolean",
                "default": false
            },
            "mediaID": {
                "type": "number",
                "default": ""
            },
            "mediaURL": {
                "type": "string",
                "default": "/wp-content/plugins/ufl-block/assets/images/showcase-image-ph.jpg"
            },
            "mediaSide": {
                "type": "boolean",
                "default": false
            }
        },
        save: (props) => {
            const {
                attributes: { title, subTitle, mediaID, mediaURL, link, hasLinkNofollow, openNewTab },
            } = props;

            const blockProps = useBlockProps.save();

            return (
                <>
                    <a
                        className="col-12 col-md-4 mb-4 position-relative slider-col"
                        href={link}
                        rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
                        target={openNewTab ? "_blank" : "_self"}
                    >
                        <div className="p-4 slider-content-wrapper">
                            <div className="mb-4">
                                {mediaURL && (
                                    <img className="img-fluid " src={mediaURL} alt="post featured image" />
                                )}
                            </div>
                            <RichText.Content className='slide-title mb-3' tagName="p" value={title} />
                            <RichText.Content className="slide-subtext" tagName="p" value={subTitle} />
                        </div>
                    </a>
                </>
            );
        }
    }
];

export default deprecated;