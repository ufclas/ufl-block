/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<section className="faculty-listing-carousel-wrapper">
				<RichText.Content tagName="h2" className="text-center text-white" value={sectionTitle} />
				<div className="faculty-listing-carousel">
					<InnerBlocks.Content />
				</div>
			</section>
		</div>
	);
};

export default Save;



