/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, subTitle, link, linkLabel, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();
	return (


		<div {...blockProps}>
			<section className="slider-manual-container py-3 slider-section">
				<div className="row mb-2">
					<div className="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
						<RichText.Content className='display-5 mt-2 mb-3' tagName="h2" value={title} />
					</div>
				</div>
				<div className="slider">
					<InnerBlocks.Content />
				</div>

				<div className="mobile-slide-btn">
					<button className="slideLeft" type="button"><span aria-label="Previous">‹</span></button>
					<button className="slideRight" type="button"><span aria-label="Next">›</span></button>
				</div>

				<div className="text-center see-more-news">

					{link && (

						<a href={link}
							className="animated-underline-button"
							rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
							target={openNewTab ? "_blank" : "_self"}
						>
							{linkLabel}
						</a>

					)}

				</div>

			</section>
		</div>


	);
};

export default Save;



