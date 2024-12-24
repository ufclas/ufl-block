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
		attributes: { text, title, btnLabel, btnLink, hasLinkNofollow, openNewTab, mediaID, mediaURL },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onLinkClick = (event) => {
		event.preventDefault();
	};

	const onChangeText = (textValue) => {
		setAttributes({ text: textValue });
	};

	const onChangeLabel = (newLabel) => {
		setAttributes({ btnLabel: newLabel })
	}

	const onChangebtnLink = (newbtnLink) => {
		setAttributes({ btnLink: newbtnLink })
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


	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Content Carousel — Stack Slide', 'content-carousel-stack-inner')}
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
								label={__('Slide Title', 'content-carousel-stack-inner')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'content-carousel-stack-inner')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Slide Text', 'content-carousel-stack-inner')}
								value={text}
								onChange={onChangeText}
								help={__('', 'content-carousel-stack-inner')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Slide Button Label', 'content-carousel-stack-inner')}
								value={btnLabel}
								onChange={onChangeLabel}
								help={__('Optional', 'content-carousel-stack-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Slide Button Link URL', 'content-carousel-stack-inner')}
								value={btnLink}
								onChange={onChangebtnLink}
								help={__('Optional', 'content-carousel-stack-inner')}
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



			<div className="slider__content">
				<figure className="slider__image">
					<img
						src={mediaURL}
						alt={'Slide Image'}
					/>
				</figure>
				<div className="slider__text">
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
						value={text}
						onChange={onChangeText}
					/>

					<ExternalLink
						href={btnLink}
						className="button animated-border-button button-border-orange button-text-dark"
						rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
						target={openNewTab ? "_blank" : "_self"}
						onClick={onLinkClick}>
						{btnLabel}
					</ExternalLink>
				</div>
			</div>





		</>
	);
};

export default Edit;



