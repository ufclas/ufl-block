import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';

const Edit = (props) => {
	const {
		attributes: { sectionTitle, sectionSubtitle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();


	const onChangeTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ sectionSubtitle: newContent })
	}

	return (
		<>


			<InspectorControls>
				<PanelBody
					title={__('Image Gallery', 'image-gallery')}
					initialOpen={true}
				>
					<PanelRow>

						<fieldset>
							<TextControl
								label={__('Section Title', 'image-gallery')}
								value={sectionTitle}
								onChange={onChangeTitle}
								help={__('Optional', 'image-gallery')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>

						<fieldset>
							<TextControl
								label={__('Section Subtext', 'image-gallery')}
								value={sectionSubtitle}
								onChange={onChangeContent}
								help={__('Optional', 'image-gallery')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>


			<div {...blockProps}>
				<section className="image-gallery bg-white position-relative">
					<div className="col-12 text-center mb-5">
						<h2>{sectionTitle}</h2>
						<p className="fs-21 mb-0">{sectionSubtitle}</p>
					</div>
					<div id="imageGallery" className="carousel slide" data-bs-interval="false" data-bs-ride="false">
						<div className="carousel-inner">
							<InnerBlocks
								renderAppender={InnerBlocks.ButtonBlockAppender}
								template={[
									['create-block/image-gallery-slide'],
								]}
								allowedBlocks={[
									'create-block/image-gallery-slide'
								]}
							/>
						</div>
					</div>
				</section>
			</div>

		</>
	);
};

export default Edit;


