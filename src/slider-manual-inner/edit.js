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
		attributes: { title, subTitle, mediaID, mediaURL, link, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ subTitle: newContent })
	}

	const onChangeLink = (newLink) => {
		setAttributes({ link: newLink })
	}


	const toggleNofollow = () => {
		setAttributes({ hasLinkNofollow: !hasLinkNofollow })
	}

	const toggleNewTab = () => {
		setAttributes({ openNewTab: !openNewTab })
	}

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


	const onLinkClick = (event) => {
		event.preventDefault();
	};


	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Slider Item', 'slider-manual-inner')}
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
								label={__('Card - Title', 'slider-manual-inner')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'slider-manual-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__('Card - Description', 'slider-manual-inner')}
								value={subTitle}
								onChange={onChangeContent}
								help={__('Optional', 'slider-manual-inner')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Slide Destination', 'slider-manual-inner')}
								value={link}
								onChange={onChangeLink}
								help={__('', 'slider-manual-inner')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Open in New Tab?"
								help={
									openNewTab
										? 'Has rel nofollow.'
										: 'No rel nofollow.'
								}
								checked={openNewTab}
								onChange={toggleNewTab}
							/>
						</fieldset>
					</PanelRow>


				</PanelBody>
			</InspectorControls>




			<a 
			className="col-12 col-md-4 mb-4 position-relative slider-col" 
			href={link}
			rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
			target={openNewTab ? "_blank" : "_self"} 
			onClick={onLinkClick}
			>
				<div className="p-4 slider-content-wrapper">
					<div className="mb-4">
						<img className="img-fluid " src={mediaURL} alt="post featured image" />
					</div>
					<RichText
						tagName="p"
						className='slide-title mb-3'
						placeholder={__(
							'Write title…'
						)}
						value={title}
						onChange={onChangeTitle}
					/>
					<RichText
						tagName="p"
						placeholder={__(
							'Write title…'
						)}
						value={subTitle}
						onChange={onChangeContent}
						className="slide-subtext"
					/>
				</div>
			</a>
		</>
	);
};

export default Edit;



