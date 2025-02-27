/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle, sectionSubtitle, buttonLabel },
	} = props;

	const blockProps = useBlockProps.save();
	return (



		<div {...blockProps}>
			<section class="featured-video">
				{sectionTitle && (

					<div className="row align-items-center">
						<div className="col-12 text-left mb-5">
							<h2 className="text-white">{sectionTitle}</h2>
						</div>
					</div>

				)}

				<div class="container-fluid multiple-video-container">
					<InnerBlocks.Content />
					<a className="video-load-more button animated-border-button button-border-orange button-dark-bg">Load More</a>
				</div>
			</section>
		</div>


	);
};

export default Save;