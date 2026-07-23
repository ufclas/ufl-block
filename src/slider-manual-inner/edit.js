import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	TextareaControl,
	PanelBody,
	PanelRow,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';

const Edit = (props) => {
	const {
		attributes: { title, subTitle, mediaID, mediaURL, link, hasLinkNofollow, openNewTab, imgAltText },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: "col-12 col-md-4 mb-4 position-relative slider-col"
	});

	const mediaItem = useSelect((select) => {
		return mediaID ? select('core').getMedia(mediaID) : null;
	}, [mediaID]);

	const originalAltText = mediaItem?.alt_text;
	const isInputEmpty = !imgAltText || imgAltText.trim() === '';

	const onSelectImage = (media) => {
		setAttributes({
			mediaURL: media.url,
			mediaID: media.id,
			imgAltText: media.alt?.trim() ? media.alt : '',
		});
	};

	const onLinkClick = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Slider Item', 'slider-manual-inner')} initialOpen={true}>

					<PanelRow>
						<fieldset style={{ width: '100%' }}>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectImage}
									allowedTypes="image"
									value={mediaID}
									render={({ open }) => (
										<Button
											variant="secondary"
											onClick={open}
											style={{ width: '100%', justifyContent: 'center', marginBottom: mediaID ? '8px' : '0' }}
										>
											{!mediaID
												? __('Upload Image', 'slider-manual-inner')
												: __('Change Image', 'slider-manual-inner')
											}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset style={{ width: '100%' }}>
							{mediaID && (
								originalAltText ? (
									<p style={{ fontSize: '12px', color: '#757575', margin: '0 0 8px 0' }}>
										{__('Media Library Alt Text:', 'slider-manual-inner')} <em>{originalAltText}</em>
									</p>
								) : isInputEmpty ? (
									<p style={{ fontSize: '12px', color: '#d63638', margin: '0 0 8px 0' }}>
										<strong>{__('Note:', 'slider-manual-inner')}</strong>{' '}
										{__('This image has no alt text in the Media Library. If the image conveys information not in the title or description, provide alt text below. If it is decorative, leaving this empty is correct.', 'slider-manual-inner')}
									</p>
								) : null
							)}
							<TextControl
								label={__('Card Image Alt Text', 'slider-manual-inner')}
								value={imgAltText}
								onChange={(value) => setAttributes({ imgAltText: value })}
								help={__('Describe the image for screen readers. Leave empty if the title and description already convey the image\'s meaning.', 'slider-manual-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset style={{ width: '100%' }}>
							<TextControl
								label={__('Card - Title', 'slider-manual-inner')}
								value={title}
								onChange={(value) => setAttributes({ title: value })}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset style={{ width: '100%' }}>
							<TextareaControl
								label={__('Card - Description', 'slider-manual-inner')}
								value={subTitle}
								onChange={(value) => setAttributes({ subTitle: value })}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset style={{ width: '100%' }}>
							<TextControl
								label={__('Slide Destination', 'slider-manual-inner')}
								value={link}
								onChange={(value) => setAttributes({ link: value })}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset style={{ width: '100%' }}>
							<ToggleControl
								label={__('Open in New Tab?', 'slider-manual-inner')}
								checked={openNewTab}
								onChange={() => setAttributes({ openNewTab: !openNewTab })}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset style={{ width: '100%' }}>
							<ToggleControl
								label={__('Add Nofollow to Link?', 'slider-manual-inner')}
								checked={hasLinkNofollow}
								onChange={() => setAttributes({ hasLinkNofollow: !hasLinkNofollow })}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>

			<li {...blockProps}>
				<div className="p-4 slider-content-wrapper">
					<div className="mb-4">
						{mediaURL && (
							<img className="img-fluid" src={mediaURL} alt={imgAltText || ''} />
						)}
					</div>
					<p className="slide-title mb-3">
						<a href={link} className="stretched-link" onClick={onLinkClick}>
							<RichText
								tagName="span"
								placeholder={__('Write title…')}
								value={title}
								onChange={(value) => setAttributes({ title: value })}
							/>
						</a>
					</p>
					<RichText
						tagName="p"
						placeholder={__('Write description…')}
						value={subTitle}
						onChange={(value) => setAttributes({ subTitle: value })}
						className="slide-subtext"
					/>
				</div>
			</li>
		</>
	);
};

export default Edit;