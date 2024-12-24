import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
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
		attributes: { text, mediaID, mediaURL, slideLink, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeText = (value) => {
		setAttributes({ text: value });
	};
	const onSelectImage = (media) => {
		setAttributes({
			mediaURL: media.url,
			mediaID: media.id,
		});
	};


	const onChangeLink = (newLink) => {
		setAttributes({ slideLink: newLink })
	}


	const toggleNofollow = () => {
		setAttributes({ hasLinkNofollow: !hasLinkNofollow })
	}
	
	const toggleNewTab = () => {
		setAttributes({ openNewTab: !openNewTab })
	}
	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Link Settings', 'social-shell-insta-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<MediaUpload
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
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Social Text', 'social-shell-insta')}
								value={text}
								onChange={onChangeText}
								help={__('', 'social-shell-insta')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Social Post Link', 'social-shell-insta')}
								value={slideLink}
								onChange={onChangeLink}
								help={__('', 'social-shell-insta')}
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



			<div className="col-xl-3 col-md-6 col-12 soc-container">


				<ExternalLink
					href={slideLink}
					className="social-item m-insta social-overlay"
					rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
					target={openNewTab ? "_blank" : "_self"}
					style={{ backgroundImage: "url(" + mediaURL + ")" }}
				>
					<span className="social-text">
						{text}
						<span className="social-icon">
							<img src="/wp-content/plugins/ufl-block/assets/images/icon-instagram.png" alt="Instagram Icon" />
						</span>
					</span>
				</ExternalLink>

			</div>

		</>
	);
};

export default Edit;



