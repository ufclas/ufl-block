/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
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
};

export default Save;



