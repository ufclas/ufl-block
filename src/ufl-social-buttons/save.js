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
		<div {...blockProps}>
		<div className="col-12 ufl-social-column justify-content-center">
			<InnerBlocks.Content />
		</div>
		</div>
	);
};

export default Save;



