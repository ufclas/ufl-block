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
		attributes: { name, title, email, bioLink, hasLinkNofollow, openNewTab, mediaID, mediaURL, phone },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangePhone = (phoneValue) => {
		setAttributes({ phone: phoneValue });
	};

	const onChangeName = (newName) => {
		setAttributes({ name: newName })
	}

	const onChangeEmail = (newEmail) => {
		setAttributes({ email: newEmail })
	}

	const onChangebioLink = (newbioLink) => {
		setAttributes({ bioLink: newbioLink })
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
					title={__('Faculty Slide Settings', 'faculty-listing-carousel-inner-block')}
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
								label={__('Faculty Name', 'faculty-listing-carousel-inner')}
								value={name}
								onChange={onChangeName}
								help={__('', 'faculty-listing-carousel-inner')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Faculty Title', 'faculty-listing-carousel-inner')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'faculty-listing-carousel-inner')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Faculty Phone #', 'faculty-listing-carousel-inner')}
								value={phone}
								onChange={onChangePhone}
								help={__('', 'faculty-listing-carousel-inner')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Faculty Email Address', 'faculty-listing-carousel-inner')}
								value={email}
								onChange={onChangeEmail}
								help={__('', 'faculty-listing-carousel-inner')}
							/>
						</fieldset>
					</PanelRow>


				</PanelBody>
			</InspectorControls>



			<div className="col-12 col-lg-5 col-faculty-headshot mb-5">
				<div className="position-relative">
					<img
						className="img-fluid faculty-headshot"
						src={mediaURL}
						alt={'Faculty Member ' + name}
					/>
					<div className="faculty-contact-info">
						<p>{name}</p>
						<p>{title}</p>
						<p><a className="faculty-tel" href={"tel:" + phone}>{phone}</a></p>
						<p><a className="faculty-email" href={email}>Send Email</a></p>
					</div>
				</div>
			</div>

		</>
	);
};

export default Edit;



