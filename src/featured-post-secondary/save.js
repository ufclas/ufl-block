/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { sectionTitle, sectionSubtitle, buttonLabel },
	} = props;

	const blockProps = useBlockProps.save();
	return (

    	<div className="news-hero-supporting">
			<InnerBlocks.Content />
		</div>

	);
};

export default Save;



