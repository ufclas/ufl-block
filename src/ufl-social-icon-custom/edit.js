import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck, PanelColorSettings } from '@wordpress/block-editor';
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
		attributes: { slideLink, hasLinkNofollow, openNewTab, backgroundColor, iconColor, backgroundHoverColor, iconHoverColor, blockID, mediaID, mediaURL  },
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

	const onSelectImage = (media) => {
		setAttributes({
			mediaURL: media.url,
			mediaID: media.id,
		});
	};
	const removeMedia = () => {
		props.setAttributes({
			mediaID: 0,
			mediaURL: ''
		});
	};

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
						<fieldset>
							<MediaUploadCheck>
								<MediaUpload
									label="Custom Icon"
									onSelect={onSelectImage}
									allowedTypes="image"
									value={mediaID}
									render={({ open }) => (
										<Button
											className={
												mediaID ? 'image-button' : 'button button-large'
											}
											onClick={open}
										>
											{!mediaID ? (
												__('Upload Image', 'ufl-block')
											) : (
												__('Change Image', 'ufl-block')
											)}
										</Button>
									)}
								/>
							</MediaUploadCheck>

							{mediaID != 0 &&
								<MediaUploadCheck>
									<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'ufl-block')}</Button>
								</MediaUploadCheck>
							}
						</fieldset>
					</PanelRow>

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
				className="custom-social-icon"
				id={"icon-button"+blockID}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}
				style={{ backgroundColor: backgroundColor }}
				onClick={onLinkClick} >
				<img className="ufl-brands ufl-custom" src={mediaURL} />
				<span className="visually-hidden">Social Icon</span>
			</ExternalLink>

</div>

		</>
	);
};

export default Edit;