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
					title={__('Button Settings', 'announcements-showcase-button-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Text', 'announcements-showcase-button')}
								value={buttonLabel}
								onChange={onChangeLabel}
								help={__('', 'announcements-showcase-button')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Destination', 'announcements-showcase-button')}
								value={buttonLink}
								onChange={onChangeLink}
								help={__('', 'announcements-showcase-button')}
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
						onClick={onLinkClick}>
						{buttonLabel}
					</a>
				</span>
			</div>


		</>
	);
};

export default Edit;



