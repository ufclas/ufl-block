/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, content, link, linkLabel, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<section className="blue-centered-cta container-fluid">
				<div className="blue-centered-cta-wrapper row">
					<div className="col-12 text-center">
						<RichText.Content className="cta-heading" tagName="h2" value={title} />
						<RichText.Content tagName="p" value={content} />
						<div className="d-flex flex-wrap justify-content-center button-wrapper">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Save;

