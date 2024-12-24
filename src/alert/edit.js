import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, InnerBlocks, PanelColorSettings } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	TextareaControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';

const Edit = (props) => {
	const {
		attributes: { title, content, link, backgroundColor, linkLabel },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent })
	}

	return (
		<>
			<InspectorControls>


				<PanelBody
					title={__('Alert Banner', 'content-carousel-inner-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Heading', 'alert')}
								value={title}
								onChange={onChangeTitle}
								help={__('Recommended', 'alert')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__('Description', 'alert')}
								value={content}
								onChange={onChangeContent}
								help={__('Recommended', 'alert')}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>

			</InspectorControls>


			<div {...blockProps} >


				<section className="position-relative alert-section">
					<div className="alert offcanvas-top show"  aria-labelledby="alertLabel" data-bs-scroll="true" data-bs-backdrop="false">
						<div className="alert-wrapper container-fluid">
							<div className="row">
								<div className="offcanvas-header">
									<RichText
										tagName="p"
										placeholder={__(
											'Write title…'
										)}
										value={title}
										onChange={onChangeTitle}
										className='alert-title'
										id='alertLabel'
									/>

									<button type="button" className="text-white btn-close" data-bs-dismiss="alert" aria-label="Close">Close</button>
								</div>
								<div className="px-0 alert-body">
									<RichText
										tagName="p"
										placeholder={__(
											'Write title…'
										)}
										className="text-white"
										value={content}
										onChange={onChangeContent}
									/>
								</div>
								<div className="d-flex button-wrapper px-0">
									<InnerBlocks
										renderAppender={InnerBlocks.ButtonBlockAppender}
										template={[
											['create-block/alert-button'],
										]}
										allowedBlocks={[
											'create-block/alert-button',
										]}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Edit;


