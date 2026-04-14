/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, RichText, InspectorControls, MediaUpload, InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
    {
      attributes: {
        "title": {
            "type": "string",
			"default": ""
		},
		"text": {
			"type": "string",
			"default": ""
		},
		"buttonLabel": {
			"type": "string",
			"default": "Add Text"
		},
		"buttonLink": {
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
		"blockID": {
			"type": "string",
			"default": ""
		}
    },
    save: (props) => {
    const { 
        attributes: { title, text, buttonLabel, buttonLink, hasLinkNofollow, openNewTab, blockID },
    } = props;

    const blockProps = useBlockProps.save();
    return (
		<div {...blockProps}>
			<div className="accordion-item">
				<button className="tab-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + blockID} aria-expanded="true" aria-controls={"collapse" + blockID} tabIndex="0" id={"heading" + blockID}>
					{title}
				</button>
				<div id={"collapse" + blockID} className="accordion-collapse collapse" aria-labelledby={"heading" + blockID} >
					<div className="accordion-body">
						<RichText.Content tagName="h3" value={title} />

						<div className="tab-body-wrap">
							<InnerBlocks.Content />
						</div>

						<div className="tab-btn-wrap">
							{buttonLink && (

								<a
									href={buttonLink}
									className='animated-underline-button'
									rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
									target={openNewTab ? "_blank" : "_self"} >
									{buttonLabel}
								</a>

							)}

						</div>

					</div>
				</div>
			</div>
		</div>
    );
    }
 }
]
export default deprecated;
 