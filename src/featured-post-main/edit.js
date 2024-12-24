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
					title={__('Settings', 'featured-post-main')}
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
								label={__('Featured Post Title', 'featured-post-main')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'featured-post-main')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Featured Post Text on hover', 'featured-post-main')}
								value={text}
								onChange={onChangeText}
								help={__('', 'featured-post-main')}
							/>
						</fieldset>
					</PanelRow>



					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Featured Post Link URL', 'featured-post-main')}
								value={btnLink}
								onChange={onChangebtnLink}
								help={__('', 'featured-post-main')}
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



			<a className="news-hero-featured" href={btnLink} rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"} target={openNewTab ? "_blank" : "_self"} style={{ backgroundImage: "url(" + mediaURL + ")" }} onClick={onLinkClick}>
			<div {...blockProps}>
				<span className="featured-hero-link">
					<span className="featured-hero-link-inner">
						<RichText
							tagName="h2"
							placeholder={__(
								'Write title…',
								'gutenberg-examples'
							)}
							value={title}
							onChange={onChangeTitle}
						/>
						<RichText
							tagName="p"
							placeholder={__(
								'Write title…',
								'gutenberg-examples'
							)}
							value={text}
							onChange={onChangeText}
						/>
					</span>
				</span>
				</div>
			</a>


		</>
	);
};

export default Edit;



