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
			<a href={btnLink} className="col-12 col-lg-3 col-md-6 visual-navigation-link dh-container" rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"} target={openNewTab ? "_blank" : "_self"}>
				<span className="visual-navigation-image-wrapper">
					<img
						className="img-fluid visual-navigation-image"
						src={mediaURL}
						alt={title}
					/>
					<div className="dh-overlay"></div>
				</span>
				<RichText.Content tagName="p" value={title} />
			</a>

		</>

	);
};

export default Save;



