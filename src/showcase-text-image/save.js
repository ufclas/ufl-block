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
			<section className="showcase-text-image-container">
				<InnerBlocks.Content />
			</section>
		</div>
	);
};

export default Save;



