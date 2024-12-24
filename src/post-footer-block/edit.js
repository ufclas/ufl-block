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
		attributes: { name, email, phone, title, subTitle, mediaID, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ name: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ email: newContent })
	}

	const onChangePhone = (newPhone) => {
		setAttributes({ phone: newPhone })
	}

	const onChangeLink = (newLink) => {
		setAttributes({ link: newLink })
	}

	const onChangeLinkLabel = (newLinkLabel) => {
		setAttributes({ linkLabel: newLinkLabel === undefined ? '' : newLinkLabel })
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

	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Block Settings', 'card-text-image-inner')}
					initialOpen={true}
				>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Author Name', 'card-text-image-inner')}
								value={name}
								onChange={onChangeTitle}
								help={__('', 'card-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Author email', 'card-text-image-inner')}
								value={email}
								onChange={onChangeContent}
								help={__('', 'card-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Author Phone', 'card-text-image-inner')}
								value={phone}
								onChange={onChangePhone}
								help={__('', 'card-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>



			<div {...blockProps}>
				<section className="single-news-footer-wrapper">
					<div className="single-news-footer">
						<div className="d-flex gx-0 single-news-meta">
							<p>Story By:</p>
							<RichText
								tagName='p'
								placeholder={__(
									'Write title…',
									'ufl-block'
								)}
								value={name}
								onChange={onChangeTitle}
							/>

							<span>/</span>
							<RichText
								placeholder={__(
									'Write title…',
									'ufl-block'
								)}
								value={email}
								onChange={onChangeContent}
							/>
							<span>/</span>

							<RichText
								placeholder={__(
									'Write title…',
									'ufl-block'
								)}
								value={phone}
								onChange={onChangePhone}
							/>
						</div>
					</div>
				</section>
			</div>



		</>
	);
};

export default Edit;



