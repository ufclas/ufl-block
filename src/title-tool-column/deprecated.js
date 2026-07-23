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
			"default": "Check it out!"
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
		attributes: { title, subTitle, mediaID, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>
			<a className="tool-link" href={link} rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}>

				{mediaURL && (
					<figure className="figure">
						<img src={mediaURL} className="figure-img img-fluid" alt={title} />
					</figure>
				)}

				<span>
					<RichText.Content tagName="h2" value={title} />
					<RichText.Content tagName="p" value={subTitle} />
				</span>
			</a>

		</>
	    );
    }
 }
]
export default deprecated;