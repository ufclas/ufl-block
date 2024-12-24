/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle, buttonText, buttonLabel },
	} = props;

	const blockProps = useBlockProps.save();
	return (

		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>

	);
};

export default Save;


