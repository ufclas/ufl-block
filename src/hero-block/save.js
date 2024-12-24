/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, useBlockProps, InspectorControls, TextControl } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { pretitle, title, mediaID, mediaURL, movieID, movieURL, hero_excerpt, linkLabel, animated_border_button, hasLinkNofollow, openNewTab, heroSplit },
	} = props;

	const blockProps = useBlockProps.save();
	return (

		<>

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
								<RichText.Content tagName="p" className='banner_subtitle_text' value={pretitle} />

							</div>
							<div className="banner_title">

								<RichText.Content tagName="h1" value={title} />
								<br />
								<div className="hero-excerpt-btn-wrapper">
									<RichText.Content tagName="p" className='hero__excerpt' value={hero_excerpt} />

									{animated_border_button && (
										<a href={animated_border_button}
											className="button animated-border-button button-border-orange button-text-light"
											rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
											target={openNewTab ? "_blank" : "_self"} >
											{linkLabel}
										</a>

									)}

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
								<RichText.Content tagName="p" className='banner_subtitle_text' value={pretitle} />
							</div>
							<div className="banner_title">
								<RichText.Content tagName="h1" value={title} />
								<br />
								<div className="hero-excerpt-btn-wrapper">
									<RichText.Content tagName="p" className='hero__excerpt' value={hero_excerpt} />
									{animated_border_button && (
										<a href={animated_border_button}
											className="button animated-border-button button-border-orange button-text-light"
											rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
											target={openNewTab ? "_blank" : "_self"} >
											{linkLabel}
										</a>

									)}


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
									<RichText.Content tagName="p" className='banner_subtitle_text' value={pretitle} />
								</div>
								<div className="banner_title">
									<RichText.Content tagName="h1" value={title} />
									<br />
									<RichText.Content tagName="p" className='hero__excerpt' value={hero_excerpt} />

									{animated_border_button && (
										<a href={animated_border_button}
											className="button animated-border-button button-border-orange button-text-light"
											rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
											target={openNewTab ? "_blank" : "_self"} >
											{linkLabel}
										</a>

									)}

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
						{mediaURL && (
							<div className="hero-bg-img" style={{ backgroundImage: "url(" + mediaURL + ")" }}>
							</div>
						)}
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
								<RichText.Content tagName="p" className='banner_subtitle_text' value={pretitle} />
							</div>
							<div className="banner_title">
								<RichText.Content tagName="h1" value={title} />
								<br />
								<div className="hero-excerpt-btn-wrapper">
									<RichText.Content tagName="p" className='hero__excerpt' value={hero_excerpt} />
									{animated_border_button && (
										<a href={animated_border_button}
											className="button animated-border-button button-border-orange button-text-light"
											rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
											target={openNewTab ? "_blank" : "_self"} >
											{linkLabel}
										</a>

									)}


								</div>
							</div>
						</div>
					</div>
				</section>

			)}


		</>
	);
};

export default Save;