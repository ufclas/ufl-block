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
		attributes: { buttonLabel, buttonLink, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const onLinkClick = (event) => {
		event.preventDefault();
	};

	const blockProps = useBlockProps();

	const onChangeLabel = (value) => {
		setAttributes({ buttonLabel: value });
	};
	const onChangeLink = (value) => {
		setAttributes({ buttonLink: value });
	};

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
					title={__('Alert Button Settings', 'alert-button')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Text', 'alert-button')}
								value={buttonLabel}
								onChange={onChangeLabel}
								help={__('', 'alert-button')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Destination', 'alert-button')}
								value={buttonLink}
								onChange={onChangeLink}
								help={__('', 'alert-button')}
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


			<div {...blockProps} >
				<span>
					<a
						href={buttonLink}
						className="animated-underline-button"
						rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
						target={openNewTab ? "_blank" : "_self"}
						onClick={onLinkClick} >
						{buttonLabel}
					</a>
				</span>
			</div>




		</>
	);
};

export default Edit;



