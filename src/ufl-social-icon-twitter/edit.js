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
				className="twitter-icon"
				id={"icon-button"+blockID}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}
				style={{ backgroundColor: backgroundColor }} 
				onClick={onLinkClick}>
				<svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="ufl-brands ufl-twitter"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill={iconColor}/></svg>
				<span className="visually-hidden">Twitter Icon</span>
			</ExternalLink>
</div>




		</>
	);
};

export default Edit;



