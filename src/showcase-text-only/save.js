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
		<section {...blockProps}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 text-center">
						<RichText.Content tagName="h2" value={title} />
						<RichText.Content tagName="p" value={content} />

						<div className="d-flex flex-wrap justify-content-center button-wrapper">
							<InnerBlocks.Content />
						</div>

					</div>
				</div>
			</div>

		</section>
	);
};

export default Save;

