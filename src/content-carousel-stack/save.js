/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<section className="content-carousel—stack">
				<div className="stacked-slider slider">
					<InnerBlocks.Content />
				</div>
			</section>
			<div className="stacked-arrow-wrapper"></div>
		</div>
	);
};

export default Save;



