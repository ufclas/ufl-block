/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, subTitle, mediaID, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab, youtubeEmbed },
	} = props;

	const blockProps = useBlockProps.save();

	return (

		<>

			<div className="video-col col-12 col-lg-4">
				<div {...blockProps} >

					{mediaURL ? (

						<a href={ 'https://www.youtube.com/embed/' + youtubeEmbed + '?autoplay=1&rel=0'} className="video-wrapper" aria-label="Play Video" data-toggle="lightbox" >
							<div className="video-play">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 109">
									<g fill="rgba(0,33,165,0.55)" stroke="#fff" stroke-width="2" data-name="Ellipse 145">
										<ellipse cx="55" cy="54.5" stroke="none" rx="55" ry="54.5" />
										<ellipse cx="55" cy="54.5" fill="none" rx="54" ry="53.5" />
									</g>
									<path fill="#fff" d="M75.445 55.49 47 37.99V73Z" data-name="Path 5" />
								</svg>
							</div>
							<img
								className="img-fluid video-thumb"
								src={mediaURL}
								alt={__(
									'Play Video about [insert subject]',
									'ufl-block'
								)} />
						</a>

					) : (
						<a href={ 'https://www.youtube.com/embed/' + youtubeEmbed + '?autoplay=1&rel=0'} className="video-wrapper" aria-label="Play Video" data-toggle="lightbox" >
						<div className="video-play">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 109">
								<g fill="rgba(0,33,165,0.55)" stroke="#fff" stroke-width="2" data-name="Ellipse 145">
									<ellipse cx="55" cy="54.5" stroke="none" rx="55" ry="54.5" />
									<ellipse cx="55" cy="54.5" fill="none" rx="54" ry="53.5" />
								</g>
								<path fill="#fff" d="M75.445 55.49 47 37.99V73Z" data-name="Path 5" />
							</svg>
						</div>
						<img
							className="img-fluid video-thumb"
							src={'https://i1.ytimg.com/vi/' + youtubeEmbed + '/0.jpg'}
							alt={__(
								'Play Video about [insert subject]',
								'ufl-block'
							)} />
					</a>


					)}
					<RichText.Content tagName="p" className="card-title" value={title} />
					<RichText.Content tagName="p" className="card-description" value={subTitle} />

				</div>

			</div>

		</>
	);
};

export default Save;

