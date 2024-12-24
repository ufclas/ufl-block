/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle, sectionSubtitle },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>
			<div {...blockProps}>
				<div className="news-body-wrapper position-relative">

					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
};

export default Save;



