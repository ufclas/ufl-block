import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, InnerBlocks, PanelColorSettings } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';
import { RawHTML, useState, useEffect, Component } from '@wordpress/element';
import './style.scss';

const Edit = (props) => {
	const {
		attributes: { slideLink, hasLinkNofollow, openNewTab, backgroundColor, iconColor, backgroundHoverColor, iconHoverColor, blockID },
		clientId,
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeLink = (value) => {
		setAttributes({ slideLink: value });
	};

	const toggleNofollow = () => {
		setAttributes({ hasLinkNofollow: !hasLinkNofollow })
	}
	
	const toggleNewTab = () => {
		setAttributes({ openNewTab: !openNewTab })
	}

	const onChangeBackgroundColor = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor })
	}

	const onChangeIconColor = (newIconColor) => {
		setAttributes({ iconColor: newIconColor })
	}


	const onChangeBackgroundHoverColor = (newBackgroundHoverColor) => {
		setAttributes({ backgroundHoverColor: newBackgroundHoverColor })
	}

	const onChangeIconHoverColor = (newIconHoverColor) => {
		setAttributes({ iconHoverColor: newIconHoverColor })
	}


	const [ initID, setinitID ] = useState( '' );

	useEffect(() => {
        setinitID(clientId);
        setAttributes({ blockID: clientId });
    }, [clientId, setAttributes]);



	const onLinkClick = (event) => {
		event.preventDefault();
	};


	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Social Link Settings', 'social-icon-facebook')}
					initialOpen={true}
				>
					<PanelRow>
					<PanelColorSettings
										title={__('Box Background Color', 'social-icon-facebook')}
										initialOpen={false}
										enableAlpha={ true }
										colorSettings={[
											{
												value: backgroundColor,
												onChange: onChangeBackgroundColor,
												label: __('Background color', 'social-icon-facebook')
											}
										]}
									/>
									</PanelRow><PanelRow>

<PanelColorSettings
										title={__('Box Background Hover Color', 'social-icon-facebook')}
										initialOpen={false}
										enableAlpha={ true }
										colorSettings={[
											{
												value: backgroundHoverColor,
												onChange: onChangeBackgroundHoverColor,
												label: __('Background color', 'social-icon-facebook')
											}
										]}
									/>



					</PanelRow>

					<PanelRow>
					<PanelColorSettings
										title={__('Icon Color', 'social-icon-facebook')}
										initialOpen={false}
										enableAlpha={ true }
										colorSettings={[
											{
												value: iconColor,
												onChange: onChangeIconColor,
												label: __('Icon color', 'social-icon-facebook')
											}
										]}
									/>
			</PanelRow><PanelRow>

<PanelColorSettings
										title={__('Icon Hover Color', 'social-icon-facebook')}
										initialOpen={false}
										enableAlpha={ true }
										colorSettings={[
											{
												value: iconHoverColor,
												onChange: onChangeIconHoverColor,
												label: __('Icon Hover color', 'social-icon-facebook')
											}
										]}
									/>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Social Post Link', 'social-icon-facebook')}
								value={slideLink}
								onChange={onChangeLink}
								help={__('', 'social-icon-facebook')}
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

<div {...blockProps}>
			<ExternalLink
				href={slideLink}
				className="instagram-icon"
				id={"icon-button"+blockID}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}
				style={{ backgroundColor: backgroundColor }}
				onClick={onLinkClick} >
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="ufl-brands ufl-instagram"><path fill={iconColor} d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
				<span className="visually-hidden">Instagram Icon</span>
			</ExternalLink>
</div>




		</>
	);
};

export default Edit;



