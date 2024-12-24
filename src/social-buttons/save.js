/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, subTitle },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div className="col-12 social-column social-column-blue justify-content-center mt-5">
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;



