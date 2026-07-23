import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps, RichText, InspectorControls, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	TextareaControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';
import { RawHTML, useState, useEffect, Component } from '@wordpress/element';



const Edit = (props) => {
	const {
		attributes: { title, text, buttonLabel, buttonLink, hasLinkNofollow, openNewTab, blockID },
		clientId,
		setAttributes,
	} = props;

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps();




	const updateName = () => {
		setAttributes({ blockID: clientId });
	};

	const [initID, setinitID] = useState('');

	useEffect(() => {
		setinitID(clientId);
		setAttributes({ blockID: clientId });
	}, [clientId, setAttributes]);


	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeText = (value) => {
		setAttributes({ text: value });
	};

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



	const ALLOWED_BLOCKS = [
		'core/paragraph',
		'core/list',
		'core/freeform',
	];



	const TEMPLATE = [
		['core/freeform', {
			placeholder: 'Enter Intro content...',
		}]
	];



	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Accordion Item', 'accordion-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Accordion Title', 'accordion-block')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'accordion-block')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Button Text', 'accordion-block')}
								value={buttonLabel}
								onChange={onChangeLabel}
								help={__('Optional', 'accordion-block')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Destination', 'accordion-block')}
								value={buttonLink}
								onChange={onChangeLink}
								help={__('Optional', 'accordion-block')}
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
				<div className="accordion-item">
					<span className="accordion-header" id={"heading" + blockID}>
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + blockID} aria-expanded="false" aria-controls={blockID}>
							<RichText
								placeholder={__(
									'Write title…',
									'gutenberg-examples'
								)}
								value={title}
								onChange={onChangeTitle}
							/>
						</button>
					</span>
					<div id={"collapse" + blockID} className="accordion-collapse collapse" aria-labelledby={"heading" + blockID}>
						<div className="accordion-body">

							<div className="accordion-body-wrap">

								<InnerBlocks
									allowedBlocks={ALLOWED_BLOCKS}
									template={TEMPLATE}
								/>
							</div>


							<div className="accordion-btn-wrap">
								<a href={buttonLink}
									rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
									target={openNewTab ? "_blank" : "_self"}
									onClick={onLinkClick} >
									{buttonLabel}
								</a>
							</div>



						</div>
					</div>
				</div>

			</div>




		</>
	);
};

export default Edit;



