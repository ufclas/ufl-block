import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
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
		attributes: { ctaText, kaLink, linkLabel, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ ctaTitle: value });
	};


	const onChangeLink = (newKaLink) => {
		setAttributes({ kaLink: newKaLink === undefined ? '' : newKaLink })
	}

	const onChangeSubText = (newSubContent) => {
		setAttributes({ ctaText: newSubContent })
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


	const onLinkClick = (event) => {
		event.preventDefault();
	};


	return (

		<>
			<InspectorControls>
				<PanelBody
					title={__('CTA Showcase Buttons', 'cta-button-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Destination', 'cta-button-block')}
								value={kaLink}
								onChange={onChangeLink}
								help={__('Add your Academy link', 'cta-button-block')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('CTA Link Title', 'cta-button-block')}
								value={linkLabel}
								onChange={onChangeLinkLabel}
								help={__('Add link title', 'cta-button-block')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('CTA Link Subtext', 'cta-button-block')}
								value={ctaText}
								onChange={onChangeSubText}
								help={__('', 'cta-button-block')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Open in New Tab?"
								help={
									openNewTab
										? 'Yes'
										: 'No'
								}
								checked={openNewTab}
								onChange={toggleNewTab}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>



			<div {...blockProps} >
				<span>

					<ExternalLink
						href={kaLink}
						className="cta-button"
						rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
						target={openNewTab ? "_blank" : "_self"}
						onClick={onLinkClick}
					>
						<span className="cta-title">{linkLabel}</span>
						<span className="cta-text">{ctaText}</span>
					</ExternalLink>

				</span>
			</div>



		</>
	);
};

export default Edit;


