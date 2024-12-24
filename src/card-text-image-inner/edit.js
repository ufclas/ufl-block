import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';
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
		attributes: { title, subTitle, mediaID, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab },
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



	const onChangeLinkLabel = (newLinkLabel) => {
		setAttributes({ linkLabel: newLinkLabel === undefined ? '' : newLinkLabel })
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
					title={__('Card Text Image Item', 'card-text-image-inner')}
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
								label={__('Card Description', 'card-text-image-inner')}
								value={subTitle}
								onChange={onChangeContent}
								help={__('', 'card-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Link Text', 'card-text-image-inner')}
								value={linkLabel}
								onChange={onChangeLinkLabel}
								help={__('', 'card-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Link Destination', 'card-text-image-inner')}
								value={link}
								onChange={onChangeLink}
								help={__('', 'card-text-image-inner')}
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


			<div {...blockProps}>

				<div className="col-cti">
					<div className="image-box">
						<img
							className="card-image"
							src={mediaURL}
							alt={__(
								'Upload Card Image',
								'ufl-block'
							)} />

					</div>
					<RichText
						tagName="p"
						placeholder={__(
							'Write title…',
							'ufl-block'
						)}
						value={subTitle}
						onChange={onChangeContent}
						className="card-text"
					/>
					<ExternalLink
						href={link}
						className="button animated-border-button button-border-orange button-text-dark"
						rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
						target={openNewTab ? "_blank" : "_self"}
						onClick={onLinkClick} >
						{linkLabel}
					</ExternalLink>
				</div>
			</div>


		</>
	);
};

export default Edit;



