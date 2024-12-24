/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { sectionTitle, buttonText, buttonLabel },
	} = props;

	const blockProps = useBlockProps.save();
	return (


	<div className="container">
		<div className="row align-items-start">
			<div className="col-12">
				<InnerBlocks.Content />
			</div>
		</div>
	</div>


	);
};

export default Save;



