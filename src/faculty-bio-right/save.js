/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle, sectionsubtitle },
	} = props;

	const blockProps = useBlockProps.save();
	return (

		<div className="col-12 col-lg-7 faculty-bio-info">
			<div {...blockProps}>
				<RichText.Content tagName="h1" value={sectionTitle} />
				<RichText.Content tagName="h2" value={sectionsubtitle} />
				<hr />
				<InnerBlocks.Content />
			</div>
		</div>


	);
};

export default Save;



