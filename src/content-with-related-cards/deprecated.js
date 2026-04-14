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
            "subTitle": {
                "type": "string",
                "default": ""
            },
            "content": {
                "type": "string",
                "default": ""
            },
            "link": {
                "type": "string",
                "default": ""
            },
            "linktext": {
                "type": "string",
                "default": ""
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
                "default": ""
            }
        },
    save: (props) => {
	const {
		attributes: { title, subTitle, content, linktext, link, hasLinkNofollow, openNewTab, mediaID, mediaURL, },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>


			<a className="news-related-link" href={link}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}>
				<p className="title">Related Story</p>
				<span className="related-img-wrapper">

				{mediaURL && (
 					<img
					 className="figure-img img-fluid"
					 src={mediaURL}
					 alt={__(
						 'Upload Post Image',
						 'ufl-block'
					 )} />
				)}

				</span>
				<p className="excerpt">{title}</p>
			</a>
		</>
	);
    }
},
]
export default deprecated;





