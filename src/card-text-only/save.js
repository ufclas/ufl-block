/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, buttonText, buttonLabel },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<section className="cards-text-only">
				<div className="row align-items-center">
					<div className="col-12 text-center mb-5">
						{title && (
							<RichText.Content tagName="h2" value={title} />
						)}
					</div>
				</div>
				<div className="card-container">
					<InnerBlocks.Content />
				</div>
			</section>
		</div>
	);
};

export default Save;



