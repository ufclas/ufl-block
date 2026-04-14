/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, subTitle, content, linktext, link, hasLinkNofollow, openNewTab, mediaID, mediaAlt, mediaURL, },
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
						mediaAlt
					 )} />
				)}


				</span>
				<p className="excerpt">{title}</p>
			</a>


		</>
	);
};

export default Save;



