/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
	{
	  attributes: {
		"text": { "type": "string" },
		"title": { "type": "string" },
		"btnLabel": { "type": "string" },
		"btnLink": { "type": "string" },
		"hasLinkNofollow": { "type": "boolean" },
		"openNewTab": { "type": "boolean" },
		"mediaURL": { "type": "string" },
		"mediaID": { "type": "number" },
	  },

	save: (props) => {
		const {
			attributes: { text, title, btnLabel, btnLink, hasLinkNofollow, openNewTab, mediaID, mediaURL },
		} = props;

		const blockProps = useBlockProps.save();
		return (
			<>


				<a className="featured-card slick-slide" href={btnLink} rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"} target={openNewTab ? "_blank" : "_self"}>
				<div {...blockProps}>
					<div className="featured-card-inner">
						<div className="feat-card-parralax-wrapper position-relative">
							<img src="/wp-content/plugins/ufl-block/assets/images/feat-card-bg.webp" className="animTop" />
							<div className="image-box">
								{mediaURL && (
									<img
										className="featured-card-image"
										src={mediaURL}
										alt={'Card Image'}
									/>
								)}

							</div>
						</div>

						<div className="featured-card-title">
							<RichText.Content value={title} />
						</div>
						<div className="featured-card-text">
							<RichText.Content value={text} />
						</div>
						<div className="animated-underline-button">{btnLabel}</div>
					</div>
					</div>
				</a>

			</>


		);
	}
	},
	{
	  attributes: {
		"text": {
			"type": "string",
			"default": ""
		},
		"title": {
			"type": "string",
			"default": ""
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
		"mediaURL": {
			"type": "string",
			"default": ""
		},
		"mediaID": {
			"type": "number",
			"default": ""
		},
		"imgAltText": {
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
				<div className="featured-card slick-slide">
					<div {...blockProps}>
						<div className="featured-card-inner">
							<div className="feat-card-parralax-wrapper position-relative">
								<img src="/wp-content/plugins/ufl-block/assets/images/feat-card-bg.webp" className="animTop" />
								<div className="image-box">
									{mediaURL && (
										<img
											className="featured-card-image"
											src={mediaURL}
											alt="Card Image"
										/>
									)}
								</div>
							</div>

							<div className="featured-card-title">
								<RichText.Content value={title} />
							</div>
							<div className="featured-card-text">
								<RichText.Content value={text} />
							</div>
						</div>
					</div>
				</div>
			</>


		);
	}
	},
]
export default deprecated;