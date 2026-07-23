/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks, useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, content, backgroundColor, link, linkLabel },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<section {...blockProps} style={{ backgroundColor: backgroundColor }} >
			<div className="container-fluid announcements-showcase-container">
				<div className="d-flex flex-wrap align-items-center justify-content-center">
					<div className="heading-left-col align-items-center">
						<RichText.Content tagName="h2" className='heading-blue' value={title} />
					</div>
					<div className="py-5 text-right-col">
						<RichText.Content tagName="p" value={content} />
					</div>
				</div>
				<div className="d-flex button-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);
};

export default Save;

