import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink,
} from '@wordpress/components';

const Edit = (props) => {
	const {
		attributes: { title, link, linkLabel, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onLinkClick = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Slider', 'slider-manual')}>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Link', 'slider-manual')}
								value={link}
								onChange={(value) => setAttributes({ link: value })}
								help={__('URL for the "see more" link below the slider', 'slider-manual')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Link Text', 'slider-manual')}
								value={linkLabel}
								onChange={(value) => setAttributes({ linkLabel: value === undefined ? '' : value })}
								help={__('Label for the "see more" link', 'slider-manual')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Open in New Tab?', 'slider-manual')}
								checked={openNewTab}
								onChange={() => setAttributes({ openNewTab: !openNewTab })}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<ToggleControl
								label={__('Add Nofollow to Link?', 'slider-manual')}
								checked={hasLinkNofollow}
								onChange={() => setAttributes({ hasLinkNofollow: !hasLinkNofollow })}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<section className="slider-manual-container py-3 slider-section">

					<div className="row mb-2">
						<div className="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
							<RichText
								tagName="h2"
								className="display-5 mt-2 mb-3"
								value={title}
								onChange={(value) => setAttributes({ title: value })}
							/>
						</div>
					</div>

					<ul className="slider" role="list">
						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[['create-block/slider-manual-inner']]}
							allowedBlocks={['create-block/slider-manual-inner']}
						/>
					</ul>

					<div className="mobile-slide-btn">
						<button className="slideLeft" type="button">
							<span aria-label="Previous">‹</span>
						</button>
						<button className="slideRight" type="button">
							<span aria-label="Next">›</span>
						</button>
					</div>

					<div className="text-center see-more-news">
						<ExternalLink
							href={link}
							className="animated-underline-button"
							onClick={onLinkClick}
						>
							{linkLabel}
							{openNewTab && (
								<span className="visually-hidden">
									{__('(opens in a new tab)', 'slider-manual')}
								</span>
							)}
						</ExternalLink>
					</div>

				</section>
			</div>
		</>
	);
};

export default Edit;