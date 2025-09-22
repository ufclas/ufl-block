import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
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
		attributes: { text, sectionSubtitle, showFacebook, showTwitter, showEmail, showLinkedin, showBluesky },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();


	const onChangeTitle = (value) => {
		setAttributes({ text: value });
	};

	return (
		<>


			<InspectorControls>
				<PanelBody
					title={__('Block Settings', 'featured-post-supporting')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Featured Post Content', 'featured-post-supporting')}
								value={text}
								onChange={onChangeTitle}
								help={__('', 'featured-post-supporting')}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={__('Social Sharing Options', 'single-post-intro')}
					initialOpen={false}
				>
					<p style={{ marginBottom: '16px', color: '#666', fontSize: '12px' }}>
						{__('Select which social sharing buttons to display:', 'single-post-intro')}
					</p>
					<PanelRow>
						<ToggleControl
							label={__('Facebook', 'single-post-intro')}
							checked={showFacebook}
							onChange={(value) => setAttributes({ showFacebook: value })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Twitter', 'single-post-intro')}
							checked={showTwitter}
							onChange={(value) => setAttributes({ showTwitter: value })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Email', 'single-post-intro')}
							checked={showEmail}
							onChange={(value) => setAttributes({ showEmail: value })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('LinkedIn', 'single-post-intro')}
							checked={showLinkedin}
							onChange={(value) => setAttributes({ showLinkedin: value })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Bluesky', 'single-post-intro')}
							checked={showBluesky}
							onChange={(value) => setAttributes({ showBluesky: value })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>



			<div {...blockProps}>


				<section className="single-news-intro">

					<div className="date-share-wrapper">
						<div className="single-news-date">
						<InnerBlocks
							template={ [
								[ 'core/post-date' ],
							] }
							allowedBlocks={ [
								'core/post-date',
							] }
							templateLock="all"
						/>
						</div>

						<div className="single-social-share">
							<div className="col-12 social-column social-column-grey">
								<span>Share</span>
								<div className="sharethis-inline-share-buttons"></div>
								{showBluesky && (
									<a className="bluesky-share-btn"
									   style={{ display: 'inline-flex', verticalAlign: 'middle' }}
									   title="Share on Bluesky">
										<svg width="24" height="24" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21.2">
											<path d="M5.429 1.761C8.089 3.758 10.95 7.807 12 9.98c1.05 -2.173 3.911 -6.222 6.571 -8.218C20.49 0.32 23.6 -0.794 23.6 2.753c0 0.708 -0.406 5.952 -0.644 6.803 -0.828 2.959 -3.846 3.714 -6.53 3.257 4.692 0.799 5.886 3.444 3.308 6.089 -4.896 5.024 -7.036 -1.26 -7.585 -2.871 -0.101 -0.295 -0.148 -0.433 -0.148 -0.316 -0.001 -0.117 -0.048 0.021 -0.148 0.316 -0.549 1.61 -2.689 7.894 -7.585 2.871 -2.578 -2.645 -1.384 -5.29 3.308 -6.089 -2.684 0.457 -5.702 -0.298 -6.53 -3.257C0.806 8.705 0.4 3.461 0.4 2.753c0 -3.547 3.11 -2.433 5.029 -0.992z" fill="#0021A5"/>
										</svg>
									</a>
								)}
							</div>
						</div>
					</div>


					{text &&
						<div className="single-news-highlight">
							<RichText
								tagName="p"
								placeholder={__(
									'Write title…',
									'gutenberg-examples'
								)}
								value={text}
								onChange={onChangeTitle}
							/>

							<hr />
						</div>
					}

				</section>

			</div>

		</>
	);
};

export default Edit;


