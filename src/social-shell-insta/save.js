/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { text, mediaID, mediaURL, slideLink, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>

			<div className="col-xl-3 col-md-6 col-12 soc-container">
				<a href={slideLink}
					className="social-item m-insta social-overlay"
					rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
					target={openNewTab ? "_blank" : "_self"}
					style={{ backgroundImage: "url(" + mediaURL + ")" }}  >
					<span className="social-text">
						{text}
						<span className="social-icon">
							<img src="/wp-content/plugins/ufl-block/assets/images/icon-instagram.png" alt="Instagram Icon" />
						</span>
					</span>
				</a>
			</div>

		</>


	);
};

export default Save;



