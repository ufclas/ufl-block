/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';

const deprecated = [
    {
    attributes: {
		"title": {
			"type": "string",
			"default": "News Title"
		},
		"text": {
			"type": "string",
			"default": "News Content"
		},
		"btnLabel": {
			"type": "string",
			"default": ""
		},
		"btnLink": {
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
		attributes: { text, title, btnLabel, btnLink, hasLinkNofollow, openNewTab, mediaID, mediaURL },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>



			<a className="news-hero-featured" href={btnLink} rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"} target={openNewTab ? "_blank" : "_self"} style={{ backgroundImage: "url(" + mediaURL + ")" }}>
			<div {...blockProps}>
				<span className="featured-hero-link">
					<span className="featured-hero-link-inner">
						<RichText.Content tagName="h2" value={title} />
						<RichText.Content tagName="p" value={text} />
					</span>
				</span>
				</div>
			</a>

		</>

	        )	
        }
    },
]
export default deprecated;

