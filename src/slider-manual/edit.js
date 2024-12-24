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
		attributes: { title, subTitle, link, linkLabel, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeLink = (newLink) => {
		setAttributes({ link: newLink })
	}

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
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
								label={__('Title', 'slider-manual')}
								value={title}
								onChange={(newMessage) =>
									setAttributes({ title: newMessage })
								}
								help={__('', 'slider-manual')}
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
								onChange={(newMessage) =>
									setAttributes({ title: newMessage })
								}
							/>
						</div>
					</div>
					<div className="slider">
						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/slider-manual-inner'],
							]}
							allowedBlocks={[
								'create-block/slider-manual-inner',
							]}
						/>
					</div>

					<div className="mobile-slide-btn">
						<button className="slideLeft" type="button"><span aria-label="Previous">‹</span></button>
						<button className="slideRight" type="button"><span aria-label="Next">›</span></button>
					</div>

					<div className="text-center see-more-news">
						<ExternalLink
							href={link}
							className="animated-underline-button"
							rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
							target={openNewTab ? "_blank" : "_self"} onClick={onLinkClick} >
							{linkLabel}
						</ExternalLink>
					</div>

				</section>
			</div>




		</>

	);
};

export default Edit;


