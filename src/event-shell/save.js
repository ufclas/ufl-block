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
			<section className="event-shell">
				<div className="event-shell-wrapper">
					<div className="col-12 text-center">

						{sectionTitle && (
							<RichText.Content tagName="h2" value={sectionTitle} />
						)}

					</div>

					<InnerBlocks.Content />


				</div>
			</section>
		</div>
	);
};

export default Save;



