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
		attributes: { title, subTitle, mediaID, mediaSide, mediaURL, 
			link, linkLabel, hasLinkNofollow, openNewTab, 
			link2, linkLabel2, hasLinkNofollow2, openNewTab2, 
			link3, linkLabel3, hasLinkNofollow3, openNewTab3, 
		},
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

	const onChangeLink2 = (newLink) => {
		setAttributes({ link2: newLink })
	}

	const onChangeLinkLabel2 = (newLinkLabel) => {
		setAttributes({ linkLabel2: newLinkLabel === undefined ? '' : newLinkLabel })
	}

	const toggleNofollow2 = () => {
		setAttributes({ hasLinkNofollow2: !hasLinkNofollow2 })
	}

	const toggleNewTab2 = () => {
		setAttributes({ openNewTab2: !openNewTab2 })
	}

	const onChangeLink3 = (newLink) => {
		setAttributes({ link3: newLink })
	}

	const onChangeLinkLabel3 = (newLinkLabel) => {
		setAttributes({ linkLabel3: newLinkLabel === undefined ? '' : newLinkLabel })
	}

	const toggleNofollow3 = () => {
		setAttributes({ hasLinkNofollow3: !hasLinkNofollow3 })
	}

	const toggleNewTab3 = () => {
		setAttributes({ openNewTab3: !openNewTab3 })
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

	const toggleSplit = () => {
		setAttributes({ mediaSide: !mediaSide })
	}

	const onLinkClick = (event) => {
		event.preventDefault();
	};


	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Showcase Text Image Item', 'showcase-text-image-inner')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Media Placement"
								help={
									mediaSide
										? 'Media Right Side'
										: 'Media Left Side'
								}
								checked={mediaSide}
								onChange={toggleSplit}
							/>
						</fieldset>
					</PanelRow>


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
								label={__('Title', 'showcase-text-image-inner')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'showcase-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__('Description', 'showcase-text-image-inner')}
								value={subTitle}
								onChange={onChangeContent}
								help={__('Optional', 'showcase-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Link Text', 'showcase-text-image-inner')}
								value={linkLabel}
								onChange={onChangeLinkLabel}
								help={__('Optional', 'showcase-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Link Destination', 'showcase-text-image-inner')}
								value={link}
								onChange={onChangeLink}
								help={__('', 'showcase-text-image-inner')}
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

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Link 2 Text', 'showcase-text-image-inner')}
								value={linkLabel2}
								onChange={onChangeLinkLabel2}
								help={__('Optional', 'showcase-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Link 2 Destination', 'showcase-text-image-inner')}
								value={link2}
								onChange={onChangeLink2}
								help={__('', 'showcase-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>
					
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Open Link 2 in New Tab?"
								help={
									openNewTab2
										? 'Has rel nofollow.'
										: 'No rel nofollow.'
								}
								checked={openNewTab2}
								onChange={toggleNewTab2}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Link 3 Text', 'showcase-text-image-inner')}
								value={linkLabel3}
								onChange={onChangeLinkLabel3}
								help={__('Optional', 'showcase-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Link 3 Destination', 'showcase-text-image-inner')}
								value={link3}
								onChange={onChangeLink3}
								help={__('', 'showcase-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>
					
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Open Link 3 in New Tab?"
								help={
									openNewTab3
										? 'Has rel nofollow.'
										: 'No rel nofollow.'
								}
								checked={openNewTab3}
								onChange={toggleNewTab3}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>


			{mediaSide ? (<div {...blockProps}>
				<section className="showcase-text-image">
					<div className="container-fluid px-0">
						<div className="row no-gutters text-image-row text-left-row bg-white">
							<div className="col-text">
								<div className="col-text-inner">
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

									<span className="sti-btn-wrap">
										<ExternalLink
											href={link}
											className="button animated-border-button button-border-blue button-text-dark"
											rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
											target={openNewTab ? "_blank" : "_self"} onClick={onLinkClick} >
											{linkLabel}
										</ExternalLink>

										{ linkLabel2 ? 
											(
												<ExternalLink
													href={link2}
													className="button animated-border-button button-border-blue button-text-dark"
													rel={hasLinkNofollow2 ? "nofollow" : "noopener noreferrer"}
													target={openNewTab2 ? "_blank" : "_self"} onClick={onLinkClick} >
													{linkLabel2}
												</ExternalLink>
											)
											: '' 											
										}

										{ linkLabel3 ? 
											(
												<ExternalLink
													href={link3}
													className="button animated-border-button button-border-blue button-text-dark"
													rel={hasLinkNofollow3 ? "nofollow" : "noopener noreferrer"}
													target={openNewTab3 ? "_blank" : "_self"} onClick={onLinkClick} >
													{linkLabel3}
												</ExternalLink>
											)
											: '' 											
										}

									</span>
								</div>
							</div>
							<div className="col-image" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
						</div>
					</div>
				</section>
			</div>) : (


				<div {...blockProps}>
					<section className="showcase-text-image">
						<div className="container-fluid px-0">
							<div className="row no-gutters text-image-row text-right-row bg-white">
								<div className="col-image" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
								<div className="col-text">
									<div className="col-text-inner">
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

										<span className="sti-btn-wrap">
											<ExternalLink
												href={link}
												className="button animated-border-button button-border-blue button-text-dark"
												rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
												target={openNewTab ? "_blank" : "_self"} onClick={onLinkClick} >
												{linkLabel}
											</ExternalLink>

											{ linkLabel2 ? 
												(
													<ExternalLink
														href={link2}
														className="button animated-border-button button-border-blue button-text-dark"
														rel={hasLinkNofollow2 ? "nofollow" : "noopener noreferrer"}
														target={openNewTab2 ? "_blank" : "_self"} onClick={onLinkClick} >
														{linkLabel2}
													</ExternalLink>
												)
												: '' 											
											}

											{ linkLabel3 ? 
												(
													<ExternalLink
														href={link3}
														className="button animated-border-button button-border-blue button-text-dark"
														rel={hasLinkNofollow3 ? "nofollow" : "noopener noreferrer"}
														target={openNewTab3 ? "_blank" : "_self"} onClick={onLinkClick} >
														{linkLabel3}
													</ExternalLink>
												)
												: '' 											
											}
										</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>)}


		</>
	);
};

export default Edit;



