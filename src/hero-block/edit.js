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
		attributes: { pretitle, title, mediaID, mediaURL, movieID, movieURL, hero_excerpt, linkLabel, animated_border_button, hasLinkNofollow, openNewTab, heroSplit },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangePreTitle = (value) => {
		setAttributes({ pretitle: value });
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
	};

	const onSelectMovie = (movie) => {
		setAttributes({
			movieURL: movie.url,
			movieID: movie.id,
		});
	};
	const removeMovie = () => {
		props.setAttributes({
			movieID: 0,
			movieURL: ''
		});
	}


	const onChangeExcerpt = (value) => {
		setAttributes({ hero_excerpt: value });
	};

	const onChangeLabel = (value) => {
		setAttributes({ linkLabel: value });
	};

	const onChangeButton = (value) => {
		setAttributes({ animated_border_button: value });
	};

	const toggleNofollow = () => {
		setAttributes({ hasLinkNofollow: !hasLinkNofollow })
	}

	const toggleNewTab = () => {
		setAttributes({ openNewTab: !openNewTab })
	}

	const toggleSplit = () => {
		setAttributes({ heroSplit: !heroSplit })
	}

	const onLinkClick = (event) => {
		event.preventDefault();
	};


	return (

		<>
			<InspectorControls>
				<PanelBody
					title={__('Hero', 'hero-block-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Hero Split"
								help={
									heroSplit
										? 'Has rel nofollow.'
										: 'No rel nofollow.'
								}
								checked={heroSplit}
								onChange={toggleSplit}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<MediaUploadCheck>
								<MediaUpload
									label="Hero Image"
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
							<MediaUploadCheck>
								<MediaUpload
									label="Hero Movie Upload"
									value={movieID}
									onSelect={onSelectMovie}
									render={({ open }) => (
										<Button
											className={movieID ? 'image-button' : 'button button-large'}
											onClick={open}
										>
											{!movieID ? (
												__('Upload Movie', 'ufl-block')
											) : (
												__('Change Movie', 'ufl-block')
											)}
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{movieID && (
								<MediaUploadCheck>
									<Button onClick={removeMovie} isLink isDestructive>
										{__('Remove Movie', 'ufl-block')}
									</Button>
								</MediaUploadCheck>
							)}

						</fieldset>
					</PanelRow>



					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Hero Intro', 'hero-block')}
								value={pretitle}
								onChange={onChangePreTitle}
								help={__('Optional', 'hero-block')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Hero Title', 'hero-block')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'hero-block')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__('Hero Description', 'hero-block')}
								value={hero_excerpt}
								onChange={onChangeExcerpt}
								help={__('', 'hero-block')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Text', 'hero-block')}
								value={linkLabel}
								onChange={onChangeLabel}
								help={__('', 'hero-block')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Destination', 'hero-block')}
								value={animated_border_button}
								onChange={onChangeButton}
								help={__('', 'hero-block')}
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



			{mediaURL && movieURL ? (

				<section {...blockProps}>
					<div className="hero-wrapper verScroll_Col hero-container-video">

						<video id="hero-video" className="hero-bg-img" style={{ backgroundImage: "url(" + mediaURL + ")" }} muted autoPlay playsinline loop>
							<source src={movieURL} type="video/mp4" />
						</video>
						<div className="banner-video-controls">
							<button className="icon-button play-video" id="play-video"><i aria-hidden="true" className="fas fa-play"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg></i> <span className="visually-hidden sr-only">Play</span></button>
							<button className="icon-button pause-video" id="pause-video"><i aria-hidden="true" className="fas fa-pause"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" /></svg></i> <span className="visually-hidden sr-only">Pause</span></button>
						</div>

						<div className="hero-object-wrapper">
							<div className="hero-object" id="object1">
								<img className="vce-single-image" width="10" height="219" src="/wp-content/plugins/ufl-block/assets/images/ver_bar_thick.webp" alt="" />
							</div>
							<div className="hero-object" id="object2">
								<img loading="lazy" className="vce-single-image" width="2" height="363" src="/wp-content/plugins/ufl-block/assets/images/ver_bar_thin.webp" alt="" />
							</div>
						</div>
						<div className="hero-banner-wrapper hero__text">
							<div className="banner_subtitle">
								<RichText
									tagName="p"
									placeholder={__(
										'Write Hero Pre Title',
									)}
									value={pretitle}
									onChange={onChangePreTitle}
									className="banner_subtitle_text"
								/>
							</div>
							<div className="banner_title">
								<RichText
									tagName="h1"
									className="banner_title_text"
									placeholder={__(
										'Write the instructions…',
									)}
									value={title}
									onChange={onChangeTitle}
								/>
								<br />
								<div className="hero-excerpt-btn-wrapper">
									<RichText
										tagName="p"
										placeholder={__(
											'Write Hero excerpt',
										)}
										value={hero_excerpt}
										onChange={onChangeExcerpt}
										className="hero__excerpt"
									/>
									<ExternalLink
										href={animated_border_button}
										className="button animated-border-button button-border-orange button-text-light"
										rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
										target={openNewTab ? "_blank" : "_self"} onClick={onLinkClick} >
										{linkLabel}
									</ExternalLink>
								</div>
							</div>
						</div>
					</div>
				</section>

			) : movieURL ? (


				<section {...blockProps}>
					<div className="hero-wrapper verScroll_Col hero-container-video">
						<video id="hero-video" className="hero-bg-img" muted autoPlay playsinline loop>
							<source src={movieURL} type="video/mp4" />
						</video>
						<div className="banner-video-controls">
							<button className="icon-button play-video" id="play-video"><i aria-hidden="true" className="fas fa-play"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg></i> <span className="visually-hidden sr-only">Play</span></button>
							<button className="icon-button pause-video" id="pause-video"><i aria-hidden="true" className="fas fa-pause"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" /></svg></i> <span className="visually-hidden sr-only">Pause</span></button>
						</div>

						<div className="hero-object-wrapper">
							<div className="hero-object" id="object1">
								<img className="vce-single-image" width="10" height="219" src="/wp-content/plugins/ufl-block/assets/images/ver_bar_thick.webp" alt="" />
							</div>
							<div className="hero-object" id="object2">
								<img loading="lazy" className="vce-single-image" width="2" height="363" src="/wp-content/plugins/ufl-block/assets/images/ver_bar_thin.webp" alt="" />
							</div>
						</div>
						<div className="hero-banner-wrapper hero__text">
							<div className="banner_subtitle">
								<RichText
									tagName="p"
									placeholder={__(
										'Write Hero Pre Title',
									)}
									value={pretitle}
									onChange={onChangePreTitle}
									className="banner_subtitle_text"
								/>
							</div>
							<div className="banner_title">
								<RichText
									tagName="h1"
									className="banner_title_text"
									placeholder={__(
										'Write the instructions…',
									)}
									value={title}
									onChange={onChangeTitle}
								/>
								<br />
								<div className="hero-excerpt-btn-wrapper">
									<RichText
										tagName="p"
										placeholder={__(
											'Write Hero excerpt',
										)}
										value={hero_excerpt}
										onChange={onChangeExcerpt}
										className="hero__excerpt"
									/>
									<ExternalLink
										href={animated_border_button}
										className="button animated-border-button button-border-orange button-text-light"
										rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
										target={openNewTab ? "_blank" : "_self"} onClick={onLinkClick}  >
										{linkLabel}
									</ExternalLink>
								</div>
							</div>
						</div>
					</div>
				</section>




			) : heroSplit ? (


				<section className="container-fluid p-0 w-100 hero-split-container">
					<div className="hero-wrapper hero-split-wrapper">
						<div className="split-hero-content">
							<div className="split-hero-content-wrapper">
								<div className="banner_subtitle">
									<RichText
										tagName="p"
										placeholder={__(
											'Write Hero Pre Title',
										)}
										value={pretitle}
										onChange={onChangePreTitle}
										className="banner_subtitle_text"
									/>
								</div>
								<div className="banner_title">
									<RichText
										tagName="h1"
										className="banner_title_text"
										placeholder={__(
											'Write the instructions…',
										)}
										value={title}
										onChange={onChangeTitle}
									/>
									<br />
									<RichText
										tagName="p"
										placeholder={__(
											'Write Hero excerpt',
										)}
										value={hero_excerpt}
										onChange={onChangeExcerpt}
										className="hero__excerpt"
									/>
									<ExternalLink
										href={animated_border_button}
										className="button animated-border-button button-border-orange button-dark-bg"
										rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
										target={openNewTab ? "_blank" : "_self"} onClick={onLinkClick} >
										{linkLabel}
									</ExternalLink>

								</div>
							</div>
						</div>
						<div className="hero-bg-img" style={{ backgroundImage: "url(" + mediaURL + ")" }}>
						</div>
					</div>
				</section>


			) : (

				<section {...blockProps}>
					<div className="hero-wrapper verScroll_Col">
						<div className="hero-bg-img" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
						<div className="hero-object-wrapper">
							<div className="hero-object" id="object1">
								<img className="vce-single-image" width="10" height="219" src="/wp-content/plugins/ufl-block/assets/images/ver_bar_thick.webp" alt="" />
							</div>
							<div className="hero-object" id="object2">
								<img loading="lazy" className="vce-single-image" width="2" height="363" src="/wp-content/plugins/ufl-block/assets/images/ver_bar_thin.webp" alt="" />
							</div>
						</div>
						<div className="hero-banner-wrapper hero__text">
							<div className="banner_subtitle">
								<RichText
									tagName="p"
									placeholder={__(
										'Write Hero Pre Title',
									)}
									value={pretitle}
									onChange={onChangePreTitle}
									className="banner_subtitle_text"
								/>
							</div>
							<div className="banner_title">
								<RichText
									tagName="h1"
									className="banner_title_text"
									placeholder={__(
										'Write the instructions…',
									)}
									value={title}
									onChange={onChangeTitle}
								/>
								<br />
								<div className="hero-excerpt-btn-wrapper">
									<RichText
										tagName="p"
										placeholder={__(
											'Write Hero excerpt',
										)}
										value={hero_excerpt}
										onChange={onChangeExcerpt}
										className="hero__excerpt"
									/>
									<ExternalLink
										href={animated_border_button}
										className="button animated-border-button button-border-orange button-text-light"
										rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
										target={openNewTab ? "_blank" : "_self"} onClick={onLinkClick} >
										{linkLabel}
									</ExternalLink>
								</div>
							</div>
						</div>
					</div>
				</section>

			)}


		</>
	);
};

export default Edit;