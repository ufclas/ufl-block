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
		attributes: { title, subTitle, mediaID, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab, youtubeEmbed },
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

	const onChangeEmbed = (embedLink) => {
		setAttributes({ youtubeEmbed: embedLink })
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
					title={__('Featured Video', 'featured-video')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectImage}
									allowedTypes="image"
									value={mediaID}
									help={__('Optional', 'featured-video')}
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
								label={__('Video - Youtube Video ID', 'featured-video')}
								value={youtubeEmbed}
								onChange={onChangeEmbed}
								help={__('example: if URL of video is: https://www.youtube.com/watch?v=aqz-KE-bpKQ. The ID is aqz-KE-bpKQ ', 'featured-video')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Title', 'featured-video')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'featured-video')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Description', 'featured-video')}
								value={subTitle}
								onChange={onChangeContent}
								help={__('Optional', 'featured-video')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Text', 'featured-video')}
								value={linkLabel}
								onChange={onChangeLinkLabel}
								help={__('Optional', 'featured-video')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Destination', 'featured-video')}
								value={link}
								onChange={onChangeLink}
								help={__('Optional', 'featured-video')}
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


			<section className="featured-video">
				<div className="container-fluid single-video-container">
					<div className="row align-items-start">
						<a href={ 'https://www.youtube.com/embed/' + youtubeEmbed + '?autoplay=1&rel=0'} className="video-wrapper" aria-label="Play Video" data-toggle="lightbox" onClick={onLinkClick}>
							<div className="video-play">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 109"><g fill="rgba(0,33,165,0.55)" stroke="#fff" strokeWidth="2" data-name="Ellipse 145"><ellipse cx="55" cy="54.5" stroke="none" rx="55" ry="54.5" /><ellipse cx="55" cy="54.5" fill="none" rx="54" ry="53.5" /></g><path fill="#fff" d="M75.445 55.49 47 37.99V73Z" data-name="Path 5" /></svg>
							</div>

							{mediaURL ? (
								<img
									className="img-fluid video-thumb"
									src={mediaURL}
									alt={__(
										'Play Video ',
										'ufl-block'
									)} />

							) : (

								<img
									className="img-fluid video-thumb"
									src={'https://i1.ytimg.com/vi/' + youtubeEmbed + '/0.jpg'}
									alt={__(
										'Play Video ',
										'ufl-block'
									)} />
							)}

						</a>
					</div>
					<div className="featured-video-content-wrapper">
						<div className="col-12">
							<RichText
								tagName="h2"
								placeholder={__(
									'Write title…'
								)}
								value={title}
								onChange={onChangeTitle}
								className="text-white"
							/>
							<RichText
								tagName="p"
								placeholder={__(
									'Write description…'
								)}
								value={subTitle}
								onChange={onChangeContent}
								className="text-white"
							/>
						</div>

						<ExternalLink
							href={link}
							className="button animated-border-button button-border-orange button-dark-bg"
							rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
							target={openNewTab ? "_blank" : "_self"}
							onClick={onLinkClick}>
							{linkLabel}
						</ExternalLink>


					</div>
				</div>
			</section>


		</>
	);
};

export default Edit;



