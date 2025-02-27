import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks, PanelColorSettings } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	TextareaControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { RawHTML, useState, useEffect, Component } from '@wordpress/element';


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
					title={__('Multiple Featured Video Item - YouTube', 'featured-video')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectImage}
									allowedTypes="image"
									value={mediaID}
									help={__('Optional', 'featured-video-item')}
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
								label={__('Video Title', 'content-carousel-inner-block')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'content-carousel-inner-block')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Video Text', 'featured-video')}
								value={subTitle}
								onChange={onChangeContent}
								help={__('Optional', 'featured-video-item')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>


			<div className="video-col col-12 col-lg-4">
				<div {...blockProps} >
					<a href={ 'https://www.youtube.com/embed/' + youtubeEmbed + '?autoplay=1&rel=0'} className="video-wrapper" aria-label="Play Video" data-toggle="lightbox"  onClick={onLinkClick}>
						<div className="video-play">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 109">
								<g fill="rgba(0,33,165,0.55)" stroke="#fff" strokeWidth="2" data-name="Ellipse 145">
									<ellipse cx="55" cy="54.5" stroke="none" rx="55" ry="54.5" />
									<ellipse cx="55" cy="54.5" fill="none" rx="54" ry="53.5" />
								</g>
								<path fill="#fff" d="M75.445 55.49 47 37.99V73Z" data-name="Path 5" />
							</svg>
						</div>
						{mediaURL ? ( 	
						<img
							className="img-fluid video-thumb"
							src={mediaURL}
							alt={__(
								'Play Video about [insert subject]',
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
					<RichText
						tagName="p"
						placeholder={__(
							'Write title…'
						)}
						value={title}
						onChange={onChangeTitle}
						className="card-title"
					/>


					<RichText
						tagName="p"
						placeholder={__(
							'Write title…'
						)}
						value={subTitle}
						onChange={onChangeContent}
						className="card-description"
					/>
				</div>
			</div>

		</>
	);
};

export default Edit;


