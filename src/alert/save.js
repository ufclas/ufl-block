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
		<div {...blockProps} >
			<section className="position-relative alert-section">
				<div className="alert offcanvas-top show" aria-labelledby="alertLabel" data-bs-scroll="true" data-bs-backdrop="false">
					<div className="alert-wrapper container-fluid">
						<div className="row">
							<div className="offcanvas-header">
								<RichText.Content tagName="p" id='alertLabel' className='alert-title' value={title} />
								<button type="button" className="text-white btn-close" data-bs-dismiss="alert" aria-label="Close">Close</button>
							</div>
							<div className="px-0 alert-body">
								<RichText.Content tagName="p" className='text-white' value={content} />
							</div>
							<div className="d-flex button-wrapper px-0">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Save;

