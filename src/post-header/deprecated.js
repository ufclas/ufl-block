/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
    {
    attributes: {
		"title": {
			"type": "string",
			"default": ""
		},
		"mediaID": {
			"type": "number",
			"default": ""
		},
		"mediaURL": {
			"type": "string",
			"default": ""
		},
		"mediaAlt": {
			 "type": "string", 
			 "default": "" 
		}
	},
    save: (props) => {
        const {
            attributes: { text, title, btnLabel, btnLink, hasLinkNofollow, openNewTab, mediaID, mediaURL, mediaAlt},
        } = props;

        const blockProps = useBlockProps.save();
        return (
            <>



                <div {...blockProps}>


                    {mediaURL ? (

                        <section className="single-news-hero w-100" style={{ backgroundImage: "url(" + mediaURL + ")" }} 
                        aria-label={__('Hero background image', 'post-header')}>
                            <RichText.Content tagName="h1" value={title} />
                        </section>

                    ) : (

                        <section className="title-block w-100" aria-label={__('Post Header', 'post-header')}>
                            <div className="container-fluid news-title-container">
                                <div className="title-wrapper">
                                    <RichText.Content tagName="h1" value={title} />
                                </div>
                            </div>
                        </section>


                    )}

                </div>
            </>
        );
    }
},
]
export default deprecated;



