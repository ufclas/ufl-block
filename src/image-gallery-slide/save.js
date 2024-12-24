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
		<div {...blockProps}>
			<div className="carousel-item active">
				<div className="img-gallery-container overflow-hidden">
					<div className="row g-0">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;



