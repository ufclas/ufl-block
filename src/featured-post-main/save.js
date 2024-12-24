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


	);
};

export default Save;


