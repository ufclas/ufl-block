/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, subTitle },
	} = props;

	const blockProps = useBlockProps.save();
	return (

		<section className="cards-text-image bg-white position-relative" {...blockProps}>
			<div className="cards-text-image-inner-wrapper">
				<div className="row align-items-center">
					<div className="col-12 text-center mb-5">
						{title && (

							<RichText.Content tagName="h2" value={title} />

						)}

					</div>
				</div>

				<div className="d-flex justify-content-center text-center col-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		</section>



	);
};

export default Save;



