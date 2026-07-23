import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';
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
		attributes: { text, title, mediaID, mediaURL },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeText = (value) => {
		setAttributes({ text: value });
	};

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onSelectImage = (media) => {
		setAttributes({
			mediaURL: media.url,
			mediaID: media.id,
		});
	};
	const removeMedia = () => {
		props.setAttributes({
			mediaID: 0,
			mediaURL: ''
		});
	}



	return (

		<>
			<InspectorControls>
				<PanelBody
					title={__('Title Tool', 'title-tool')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectImage}
									allowedTypes="image"
									value={mediaID}
									render={({ open }) => (
										<Button
											className={
												mediaID ? 'image-button' : 'button button-large'
											}
											onClick={open}
										>
											{!mediaID ? (
												__('Upload Image', 'ufl-block')
											) : (
												__('Change Image', 'ufl-block')
											)}
										</Button>
									)}
								/>
							</MediaUploadCheck>

							{mediaID != 0 &&
								<MediaUploadCheck>
									<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'ufl-block')}</Button>
								</MediaUploadCheck>
							}
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Title', 'title-tool')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'title-tool')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Description', 'title-tool')}
								value={text}
								onChange={onChangeText}
								help={__('Optional', 'title-tool')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>



			<div {...blockProps}>
				<section className="title-tool w-100">
					<div className="title-tool-bg" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
					<div className="title-tool-inner">
						<div className="title-tool-title">
							<RichText
								tagName="h1"
								placeholder={__(
									'Write the Title',
								)}
								value={title}
								onChange={onChangeTitle}
							/>

							<RichText
								tagName="p"
								placeholder={__(
									'Write Hero Pre Title',
								)}
								value={text}
								onChange={onChangeText}
								className="sub-header"
							/>
						</div>
						<div className="tool-link-wrapper">

							<InnerBlocks
								renderAppender={InnerBlocks.ButtonBlockAppender}
								template={[
									['create-block/title-tool-column'],
								]}
								allowedBlocks={[
									'create-block/title-tool-column',
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