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
	const onLinkClick = (event) => {
		event.preventDefault();
	};



	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Blue Centered CTA Button', 'blue-centered-cta-button')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Text', 'blue-centered-cta-button')}
								value={buttonLabel}
								onChange={onChangeLabel}
								help={__('', 'blue-centered-cta-button')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Destination', 'blue-centered-cta-button')}
								value={buttonLink}
								onChange={onChangeLink}
								help={__('', 'blue-centered-cta-button')}
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
						className="button animated-border-button button-border-white button-text-light"
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



