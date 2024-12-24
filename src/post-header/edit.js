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

	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Block Settings', 'post-header')}
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
								label={__('Post Title', 'post-header')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'post-header')}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>


			<div {...blockProps}>


				{mediaURL ? (

					<section className="single-news-hero w-100" style={{ backgroundImage: "url(" + mediaURL + ")" }} >
						<RichText
							tagName="h1"
							placeholder={__(
								'Write title…',
								'gutenberg-examples'
							)}
							value={title}
							onChange={onChangeTitle}
						/>
					</section>

				) : (

					<section className="title-block w-100">
						<div className="container-fluid news-title-container">
							<div className="title-wrapper">
								<RichText
									tagName="h1"
									placeholder={__(
										'Write title…',
										'gutenberg-examples'
									)}
									value={title}
									onChange={onChangeTitle}
								/>
							</div>
						</div>
					</section>


				)}

			</div>

		</>
	);
};

export default Edit;



