/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle, sectionSubtitle, buttonLabel },
	} = props;

	const blockProps = useBlockProps.save();
	return (

		<div {...blockProps}>
			<section className="visual-navigation">
				<div className="visual-navigation-intro">
					{sectionTitle && (
						<RichText.Content tagName="h2" value={sectionTitle} />
					)}
					{sectionSubtitle && (
						<RichText.Content tagName="p" value={sectionSubtitle} />
					)}
				</div>
				<div className="visual-navigation-wrapper row">
					<InnerBlocks.Content />
				</div>
			</section>
		</div>

	);
};

export default Save;



