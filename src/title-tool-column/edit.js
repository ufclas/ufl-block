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
					title={__('Title Tool Item', 'title-tool-column')}
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
								label={__('Card - Title ', 'title-tool-column')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'title-tool-column')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__('Card - Description', 'title-tool-column')}
								value={subTitle}
								onChange={onChangeContent}
								help={__('Optional - must be consistent on all cards', 'title-tool-column')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card - Destination', 'title-tool-column')}
								value={link}
								onChange={onChangeLink}
								help={__('', 'title-tool-column')}
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



			<a className="tool-link" href={link} rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"} onClick={onLinkClick}>
				<figure className="figure">
					<img src={mediaURL} className="figure-img img-fluid" alt={title} />
				</figure>
				<span>
					<RichText
						tagName="h2"
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
					/>
				</span>
			</a>

		</>
	);
};

export default Edit;



