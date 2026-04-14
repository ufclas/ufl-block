/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle, sectionSubtitle, buttonLabel, blackAndWhiteHoverToggle },
	} = props;

	const blockProps = useBlockProps.save();
	const blackAndWhiteClass = blackAndWhiteHoverToggle ? 'black-and-white-hover' : '';

	return (

		<div {...blockProps}>
			<section className={`visual-navigation` + ' ' + blackAndWhiteClass}>
				<div className="visual-navigation-intro">
					{sectionTitle && (
						<RichText.Content tagName="h2" value={sectionTitle} />
					)}
					{sectionSubtitle && (
						<RichText.Content tagName="p" value={sectionSubtitle} />
					)}
				</div>
				<div className={"visual-navigation-wrapper row" + ' ' + blackAndWhiteClass}>
					<InnerBlocks.Content />
				</div>
			</section>
		</div>

	);
};

export default Save;