/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
    {
    attributes: {
		"title": {
			"type": "string",
			"default": ""
		},
		"subTitle": {
			"type": "string",
			"default": ""
		},
		"youtubeEmbed": {
			"type": "string",
			"default": ""
		},
		"link": {
			"type": "string",
			"default": ""
		},
		"linkLabel": {
			"type": "string",
			"default": "Check it out!"
		},
		"hasLinkNofollow": {
			"type": "boolean",
			"default": false
		},
		"openNewTab": {
			"type": "boolean",
			"default": false
		},
		"mediaID": {
			"type": "number",
			"default": ""
		},
		"mediaURL": {
			"type": "string",
			"default": ""
		}
	},
save: (props) => {
	const {
		attributes: { subTitle, mediaID, mediaURL, hasLinkNofollow, openNewTab, youtubeEmbed },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>



			{youtubeEmbed ? (
				<div {...blockProps}>

					<section className="fullwidth-media">
						<div className="container-fluid single-video-container">
							<div className="row align-items-start position-relative">
								<a href={'https://www.youtube.com/embed/' + youtubeEmbed + '?autoplay=1&rel=0'} className="p-0 video-wrapper" data-toggle="lightbox" role="button" aria-label={`Play video: ${subTitle || 'video'}`}>
									<div className="video-play" aria-hidden="true">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 109"><g fill="rgba(0,33,165,0.55)" stroke="#fff" strokeWidth="2" data-name="Ellipse 145"><ellipse cx="55" cy="54.5" stroke="none" rx="55" ry="54.5" /><ellipse cx="55" cy="54.5" fill="none" rx="54" ry="53.5" /></g><path fill="#fff" d="M75.445 55.49 47 37.99V73Z" data-name="Path 5" /></svg>
									</div>

									{mediaURL ? (
										<img
											className="img-fluid video-thumb"
											src={mediaURL}
											alt=""
											aria-hidden="true"/>
									) : (

										<img
											className="img-fluid video-thumb"
											src={'https://i1.ytimg.com/vi/' + youtubeEmbed + '/0.jpg'}
											alt=""
											aria-hidden="true" />





									)}


								</a>
								<div id="fullwidthBg" className="fullwidthBg"></div>
							</div>
							<div className="featured-video-content-wrapper">
								<RichText.Content tagName="p" value={subTitle} />
							</div>
						</div>
					</section>
				</div>
			) : (
				<div {...blockProps}>
					<section className="fullwidth-media">
						<div className="container-fluid single-video-container">
							<div className="row align-items-start position-relative">
								<div className="p-0 video-wrapper img-bg" data-toggle="lightbox" >
									<img
										className="img-fluid video-thumb"
										src={mediaURL}
										alt="" 
										aria-hidden="true" />
								</div>
								<div id="fullwidthBg" className="fullwidthBg"></div>
							</div>
							<div className="featured-video-content-wrapper">
								<RichText.Content tagName="p" value={subTitle} />
							</div>
						</div>
					</section>

				</div>
			)}



		</>
	        )	
        }
    },
]
export default deprecated;