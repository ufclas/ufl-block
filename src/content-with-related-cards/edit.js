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
		attributes: { title, subTitle, content, linktext, link, hasLinkNofollow, openNewTab, mediaID, mediaURL, },
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
					title={__('Related Post Settings', 'content-with-related-cards')}
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
								label={__('Related Post Text', 'content-with-related-cards')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'content-with-related-cards')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Related Post Link URL', 'content-with-related-cards')}
								value={link}
								onChange={onChangeLink}
								help={__('', 'content-with-related-cards')}
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



			<a className="news-related-link" href={link}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}
				onClick={onLinkClick}>
				<p className="title">Related Story</p>
				<span className="related-img-wrapper">
					<img
						className="figure-img img-fluid"
						src={mediaURL}
						alt={__(
							'Upload Post Image',
							'ufl-block'
						)} />
				</span>
				<p className="excerpt">{title}</p>
			</a>


		</>
	);
};

export default Edit;


