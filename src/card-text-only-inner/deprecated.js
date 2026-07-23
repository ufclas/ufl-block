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
		"subText": {
			"type": "string",
			"default": ""
		},
		"slideLink": {
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
		}
	},
save: (props) => {
	const {
		attributes: { title, subText, slideLink, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>
			<a href={slideLink}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}
				className="button card slick-slide">
                <span className="cta-title">
                    <RichText.Content value={title} />
                </span>
                <span className="cta-text">
                    <RichText.Content value={subText} />
                </span>
            </a>
		</>
        );
    }
 },
]
export default deprecated;