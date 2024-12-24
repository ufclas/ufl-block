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
			<section className="featured-card-section">
				<div className="featured-card-container container-fluid">
					<InnerBlocks.Content />
				</div>
			</section>
		</div>
	);
};

export default Save;



