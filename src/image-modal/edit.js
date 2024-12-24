import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks, PanelColorSettings } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	TextareaControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { RawHTML, useState, useEffect, Component } from '@wordpress/element';


const Edit = (props) => {
	const {
		attributes: { title, content, blockID, modalTarget, mediaID, mediaURL },
		clientId,
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

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

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent })
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
					title={__('Image Gallery Slide', 'image-modal')}
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
								label={__('Slide - Title', 'image-modal')}
								value={title}
								onChange={onChangeTitle}
								help={__('Optional', 'image-modal')}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div className="col-6 col-md-3 col-image-gallery" style={{ backgroundImage: "url(" + mediaURL + ")" }}>
				<a href="#" data-bs-toggle="modal" data-bs-target={'#modal' + blockID} aria-label="modal about [insert subject]" onClick={onLinkClick}></a>
			</div>

			<div className="modal fade img-gallery-modal" id={'modal' + blockID} aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-bs-backdrop="static">
				<div className="modal-dialog modal-fullscreen">
					<div className="modal-content">
						<div className="modal-body">
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							<div className="row">
								<div className="col-12 col-md-6">
									<RichText
										tagName="h2"
										placeholder={__(
											'Write title…',
											'gutenberg-examples'
										)}
										value={title}
										onChange={onChangeTitle}
									/>
									<InnerBlocks
										allowedBlocks={ALLOWED_BLOCKS}
										template={TEMPLATE}
									/>
								</div>
								<div className="col-12 col-md-6">
									<img className="img-fluid" src={mediaURL} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	);
};

export default Edit;


