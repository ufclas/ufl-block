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
				className="youtube-icon"
				id={"icon-button"+blockID}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}
				style={{ backgroundColor: backgroundColor }}
				onClick={onLinkClick} >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="ufl-brands ufl-youtube"><path fill={iconColor} d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
				<span className="visually-hidden">Youtube Icon</span>
			</ExternalLink>
</div>




		</>
	);
};

export default Edit;



