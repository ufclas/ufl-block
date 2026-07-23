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

	
<div { ...blockProps }>
	<section className="news-landing-header">
    	<div className="news-hero-wrapper">
			<InnerBlocks.Content />
		</div>
    </section>
</div>


	);
};

export default Save;



