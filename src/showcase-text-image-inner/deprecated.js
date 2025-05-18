import { RichText, useBlockProps } from '@wordpress/block-editor';

const deprecated = [

    {
        attributes: {
            "title": {
                "type": "string",
                "selector": "h2",
                "default": ""
            },
            "subTitle": {
                "type": "string",
                "selector": "p",
                "default": ""
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
                attributes: { title, subTitle, mediaID, mediaSide, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab, link2, linkLabel2, hasLinkNofollow2, openNewTab2 },
              } = props;

            const blockProps = useBlockProps.save();

            return (
            <>


            {mediaSide ? (


                <div {...blockProps}>
                <section className="showcase-text-image">
                    <div className="container-fluid px-0">
                    <div className="row no-gutters text-image-row text-left-row bg-white">
                        <div className="col-text">
                        <div className="col-text-inner">
                            <RichText.Content tagName="h2" value={title} />
                            <RichText.Content tagName="p" value={subTitle} />
                            <span className="sti-btn-wrap">
                            {link && (
                                <a href={link}
                                className="button animated-border-button button-border-blue button-text-dark"
                                rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
                                target={openNewTab ? "_blank" : "_self"}
                                >
                                {linkLabel}
                                </a>
                            )}

                            </span>
                        </div>
                        </div>
                        <div className="col-image" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
                    </div>
                    </div>
                </section>
                </div>

            ) : (

                <div {...blockProps}>
                <section className="showcase-text-image">
                    <div className="container-fluid px-0">
                    <div className="row no-gutters text-image-row text-row-right bg-white">
                        <div className="col-image" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
                        <div className="col-text">
                        <div className="col-text-inner">
                            <RichText.Content tagName="h2" value={title} />
                            <RichText.Content tagName="p" value={subTitle} />
                            <span className="sti-btn-wrap">
                            {link && (
                                <a href={link}
                                className="button animated-border-button button-border-blue button-text-dark"
                                rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
                                target={openNewTab ? "_blank" : "_self"}
                                >
                                {linkLabel}
                                </a>
                            )}
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>


            )}


            </>			
            )	
        }

    },
]

export default deprecated;