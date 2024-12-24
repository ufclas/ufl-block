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
					title={__('Showcase—Text Only Buttons', 'showcase-text-only-button')}
					initialOpen={true}
				> 
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Text', 'showcase-text-only-button')}
								value={buttonLabel}
								onChange={onChangeLabel}
								help={__('', 'showcase-text-only-button')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Destination', 'showcase-text-only-button')}
								value={buttonLink}
								onChange={onChangeLink}
								help={__('', 'showcase-text-only-button')}
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
						className="animated-border-button button button-border-blue button-text-dark"
						rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
						target={openNewTab ? "_blank" : "_self"} onClick={onLinkClick} >
						{buttonLabel}
					</a>
				</span>
			</div>




		</>
	);
};

export default Edit;



