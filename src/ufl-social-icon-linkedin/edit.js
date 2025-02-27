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
					title={__('Social Link Settings', 'social-icon-linkedin')}
					initialOpen={true}
				>
					<PanelRow>
					<PanelColorSettings
										title={__('Box Background Color', 'social-icon-linkedin')}
										initialOpen={false}
										enableAlpha={ true }
										colorSettings={[
											{
												value: backgroundColor,
												onChange: onChangeBackgroundColor,
												label: __('Background color', 'social-icon-linkedin')
											}
										]}
									/>
									</PanelRow><PanelRow>

<PanelColorSettings
										title={__('Box Background Hover Color', 'social-icon-linkedin')}
										initialOpen={false}
										enableAlpha={ true }
										colorSettings={[
											{
												value: backgroundHoverColor,
												onChange: onChangeBackgroundHoverColor,
												label: __('Background color', 'social-icon-linkedin')
											}
										]}
									/>



					</PanelRow>

					<PanelRow>
					<PanelColorSettings
										title={__('Icon Color', 'social-icon-linkedin')}
										initialOpen={false}
										enableAlpha={ true }
										colorSettings={[
											{
												value: iconColor,
												onChange: onChangeIconColor,
												label: __('Icon color', 'social-icon-linkedin')
											}
										]}
									/>
			</PanelRow><PanelRow>

<PanelColorSettings
										title={__('Icon Hover Color', 'social-icon-linkedin')}
										initialOpen={false}
										enableAlpha={ true }
										colorSettings={[
											{
												value: iconHoverColor,
												onChange: onChangeIconHoverColor,
												label: __('Icon Hover color', 'social-icon-linkedin')
											}
										]}
									/>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Social Post Link', 'social-icon-linkedin')}
								value={slideLink}
								onChange={onChangeLink}
								help={__('', 'social-icon-linkedin')}
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
				className="linkedin-icon"
				id={"icon-button"+blockID}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}
				style={{ backgroundColor: backgroundColor }}
				onClick={onLinkClick} >
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="ufl-brands ufl-linkedin"><path fill={iconColor} d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
				<span className="visually-hidden">LinkedIn Icon</span>
			</ExternalLink>
</div>




		</>
	);
};

export default Edit;



