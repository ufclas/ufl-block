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
			<section className="fullwidth-text-block card-right-rail-section position-relative">
				<div {...blockProps}>
					<InnerBlocks.Content />
				</div>
			</section>

		</>

	);
};

export default Save;



