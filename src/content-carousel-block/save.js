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
		<div {...blockProps}>
			<section id="contentCarousel" className="content-carousel">
				<div className="carousel-inner content-carousel-slide" dir="rtl">
					<InnerBlocks.Content />
				</div>
			</section>
		</div>
	);
};

export default Save;



