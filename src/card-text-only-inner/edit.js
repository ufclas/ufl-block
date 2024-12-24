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
		attributes: { title, subText, slideLink, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeSubText = (newsubText) => {
		setAttributes({ subText: newsubText })
	}

	const onChangeLink = (newLink) => {
		setAttributes({ slideLink: newLink })
	}

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
					title={__('Card Text Only Item', 'card-text-only-inner')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Title', 'card-text-only-inner')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'card-text-only-inner')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Description', 'card-text-only-inner')}
								value={subText}
								onChange={onChangeSubText}
								help={__('Optional', 'card-text-only-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Destination', 'card-text-only-inner')}
								value={slideLink}
								onChange={onChangeLink}
								help={__('', 'card-text-only-inner')}
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



			<a href={slideLink}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}
				className="button card slick-slide"
				onClick={onLinkClick} >
				<span className="cta-title">
					<RichText
						placeholder={__(
							'Write title…',
							'gutenberg-examples'
						)}
						value={title}
						onChange={onChangeTitle}
					/>
				</span>
				<span className="cta-text">
					<RichText
						placeholder={__(
							'Write text',
							'gutenberg-examples'
						)}
						value={subText}
						onChange={onChangeSubText}
					/>
				</span>
			</a>


		</>
	);
};

export default Edit;



