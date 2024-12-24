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

		<div className="event-shell-carousel py-5">
			<InnerBlocks.Content />
		</div>

	);
};

export default Save;


