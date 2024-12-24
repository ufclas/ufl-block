import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';
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
		attributes: { text, title, btnLabel, btnLink, hasLinkNofollow, openNewTab, mediaID, mediaURL },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeText = (textValue) => {
		setAttributes({ text: textValue });
	};

	const onChangeLabel = (newLabel) => {
		setAttributes({ btnLabel: newLabel })
	}

	const onChangebtnLink = (newbtnLink) => {
		setAttributes({ btnLink: newbtnLink })
	}

	const toggleNofollow = () => {
		setAttributes({ hasLinkNofollow: !hasLinkNofollow })
	}

	const toggleNewTab = () => {
		setAttributes({ openNewTab: !openNewTab })
	}

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
	}
	const onLinkClick = (event) => {
		event.preventDefault();
	};

	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Featured Cards - Card', 'featured-cards-inner')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<MediaUploadCheck>
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
							</MediaUploadCheck>

							{mediaID != 0 &&
								<MediaUploadCheck>
									<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'ufl-block')}</Button>
								</MediaUploadCheck>
							}
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Title', 'featured-cards-inner')}
								value={title}
								onChange={onChangeTitle}
								help={__('Optional', 'featured-cards-inner')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Text', 'featured-cards-inner')}
								value={text}
								onChange={onChangeText}
								help={__('Optional', 'featured-cards-inner')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Button Label', 'featured-cards-inner')}
								value={btnLabel}
								onChange={onChangeLabel}
								help={__('', 'featured-cards-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Button Destnation', 'featured-cards-inner')}
								value={btnLink}
								onChange={onChangebtnLink}
								help={__('', 'featured-cards-inner')}
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





			<a className="featured-card slick-slide" href={btnLink} rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"} target={openNewTab ? "_blank" : "_self"}  onClick={onLinkClick}>
			<div {...blockProps}>
				<div className="featured-card-inner">

					<div className="feat-card-parralax-wrapper position-relative">
						<img src="/wp-content/plugins/ufl-block/assets/images/feat-card-bg.webp" className="animTop" />
						<div className="image-box">
							<img
								className="featured-card-image"
								src={mediaURL}
								alt={'Card Image'}
							/>
						</div>
					</div>

					<div className="featured-card-title">
						<RichText
							placeholder={__(
								'Write title…',
								'gutenberg-examples'
							)}
							value={title}
							onChange={onChangeTitle}
						/>
					</div>
					<div className="featured-card-text">
						<RichText
							tagName="p"
							placeholder={__(
								'Write title…',
								'gutenberg-examples'
							)}
							value={text}
							onChange={onChangeText}
						/>
					</div>
					<div className="animated-underline-button">{btnLabel}</div>
				</div>
				</div>
			</a>

		</>
	);
};

export default Edit;



