/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, subTitle, mediaID, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab, youtubeEmbed },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>
			<section className="featured-video">
				<div className="container-fluid single-video-container">
					<div className="row align-items-start">
						{mediaURL ? (

							<a href={ 'https://www.youtube.com/embed/' + youtubeEmbed + '?autoplay=1&rel=0'} className="video-wrapper" aria-label="Play Video" data-toggle="lightbox">
								<div className="video-play">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 109"><g fill="rgba(0,33,165,0.55)" stroke="#fff" strokeWidth="2" data-name="Ellipse 145"><ellipse cx="55" cy="54.5" stroke="none" rx="55" ry="54.5" /><ellipse cx="55" cy="54.5" fill="none" rx="54" ry="53.5" /></g><path fill="#fff" d="M75.445 55.49 47 37.99V73Z" data-name="Path 5" /></svg>
								</div>
								<img
									className="img-fluid video-thumb"
									src={mediaURL}
									alt={__('Play Video', 'ufl-block')}
								/>
							</a>

						) : (


							<a href={ 'https://www.youtube.com/embed/' + youtubeEmbed + '?autoplay=1&rel=0'} className="video-wrapper" aria-label="Play Video" data-toggle="lightbox">
							<div className="video-play">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 109"><g fill="rgba(0,33,165,0.55)" stroke="#fff" strokeWidth="2" data-name="Ellipse 145"><ellipse cx="55" cy="54.5" stroke="none" rx="55" ry="54.5" /><ellipse cx="55" cy="54.5" fill="none" rx="54" ry="53.5" /></g><path fill="#fff" d="M75.445 55.49 47 37.99V73Z" data-name="Path 5" /></svg>
							</div>
							
							<img
									className="img-fluid video-thumb"
									src={'https://i1.ytimg.com/vi/' + youtubeEmbed + '/0.jpg'}
									alt={__('Play Video', 'ufl-block')}
							/>
						
						</a>


			

						)}

					</div>
					<div className="featured-video-content-wrapper">
						<div className="col-12 col-md-8">
							<h2 className="text-white">{title}</h2>
							<p className="text-white">{subTitle}</p>
						</div>

						{link && (
							<a href={link}
								className="button animated-border-button button-border-orange button-dark-bg"
								rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
								target={openNewTab ? "_blank" : "_self"}
							>
								{linkLabel}
							</a>
						)}

					</div>
				</div>
			</section>



		</>


	);
};

export default Save;



