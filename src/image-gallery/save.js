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

			<section className="image-gallery bg-white position-relative">

				<div className="col-12 text-center mb-5">

					{sectionTitle && (
						<h2>{sectionTitle}</h2>
					)}

					{sectionSubtitle && (
						<p className="fs-21 mb-0">{sectionSubtitle}</p>
					)}

				</div>

				<div id="imageGallery" className="carousel slide" data-bs-interval="false" data-bs-ride="false">
					<div className="carousel-inner">
						<InnerBlocks.Content />
					</div>
				</div>

			</section>

		</div>

	);
};

export default Save;



