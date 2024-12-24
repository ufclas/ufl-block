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
	const blockClasses = `slick-slide position-relative ${blockProps.className}`;
	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ subTitle: newContent })
	}

	const onChangeLink = (newLink) => {
		setAttributes({ link: newLink })
	}

	const onLinkClick = (event) => {
		event.preventDefault();
	};

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

	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Content Carousel Slide', 'content-carousel-inner-block')}
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
								label={__('Slide - Title', 'content-carousel-inner-block')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'content-carousel-inner-block')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Slide - Description', 'content-carousel-inner-block')}
								value={subTitle}
								onChange={onChangeContent}
								help={__('Optional', 'content-carousel-inner-block')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Slide Link Label', 'content-carousel-inner-block')}
								value={linkLabel}
								onChange={onChangeLinkLabel}
								help={__('Optional', 'content-carousel-inner-block')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Slide Link Url', 'content-carousel-inner-block')}
								value={link}
								onChange={onChangeLink}
								help={__('Optional', 'content-carousel-inner-block')}
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

			<div className="slick-slide position-relative">
				<div className="w-100">
					<div className="animLines-wrapper">
						<div className="smallBar_left-wrapper">
							<span className="smallBar_left animLines">
								<img src="/wp-content/plugins/ufl-block/assets/images/thin-left.webp" aria-hidden="true" alt="horizontal orange line" />
							</span>
						</div>

						<div className="largeBar-wrapper">
							<span className="largeBar animLines">
								<img src="/wp-content/plugins/ufl-block/assets/images/largeBar.webp" aria-hidden="true" alt="horizontal orange line" />
							</span>
						</div>

						<div className="largeBar_bottom-wrapper">
							<span className="largeBar_bottom animLines">
								<img src="/wp-content/plugins/ufl-block/assets/images/largeBar_bottom.webp" aria-hidden="true" alt="horizontal orange line" />
							</span>
						</div>

						<div className="smallBar-wrapper">
							<span className="smallBar animLines">
								<img src="/wp-content/plugins/ufl-block/assets/images/smallBar.webp" aria-hidden="true" alt="horizontal orange line" />
							</span>
						</div>
					</div>
					<div className="row g-0">
						<div className="col-md-6">
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
						</div>
						<div className="col-md-5 button-col">
							<ExternalLink
								href={link}
								className="button animated-border-button button-border-orange button-text-light"
								rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
								target={openNewTab ? "_blank" : "_self"}
								onClick={onLinkClick} >
								{linkLabel}
							</ExternalLink>
						</div>
					</div>
					<div className="cc-bg-img" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
				</div>
			</div>
		</>
	);
};

export default Edit;



