import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
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
		attributes: { title, subTitle, content, linktext, link, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangesubTitle = (newsubText) => {
		setAttributes({ subTitle: newsubText })
	}


	const onChangeContent = (newcontent) => {
		setAttributes({ content: newcontent })
	}

	const onChangeLinktext = (newLinktext) => {
		setAttributes({ linktext: newLinktext })
	}

	const onChangeLink = (newLink) => {
		setAttributes({ link: newLink })
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
					title={__('Card Right Rail - Card', 'card-text-only-inner')}
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
								label={__('Card Subtitle', 'card-text-only-inner')}
								value={subTitle}
								onChange={onChangesubTitle}
								help={__('Optional', 'card-text-only-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Description', 'card-text-only-inner')}
								value={content}
								onChange={onChangeContent}
								help={__('', 'card-text-only-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Link Text', 'card-text-only-inner')}
								value={linktext}
								onChange={onChangeLinktext}
								help={__('Optional', 'card-text-only-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Destination', 'card-text-only-inner')}
								value={link}
								onChange={onChangeLink}
								help={__('Optional', 'card-text-only-inner')}
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


			{link ? (


				<div className="card-right-rail">
					<div className="card-right-rail-inner-wrapper position-relative">
						<p className="crr-header">{title}</p>
						{subTitle ? (
							<p className="crr-sub-header">{subTitle}</p>
						) : ('')}
						<p className="crr-text">{content}</p>
						<a href={link}
							rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
							target={openNewTab ? "_blank" : "_self"}
							onClick={onLinkClick}>
							<span className="visually-hidden">{linktext}</span>
						</a>
						<span className="animated-underline-button">{linktext}</span>
					</div>
				</div>




			) : (


				<div className="card-right-rail">
					<div className="card-right-rail-inner-wrapper position-relative">
						<p className="crr-header">{title}</p>
						{subTitle && <p className="crr-sub-header">{subTitle}</p>}
						<p className="crr-text">{content}</p>
					</div>
				</div>



			)}


		</>
	);
};

export default Edit;


