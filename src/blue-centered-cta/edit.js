import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	TextareaControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';

const Edit = (props) => {
	const {
		attributes: { title, content, linkLabel, link, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent })
	}

	const onChangeLabel = (newLabel) => {
		setAttributes({ linkLabel: newLabel })
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

	return (

		<>


			<InspectorControls>
				<PanelBody
					title={__('Blue Centered CTA', 'blue-centered-cta')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Title', 'blue-centered-cta')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'blue-centered-cta')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__('Description', 'blue-centered-cta')}
								value={content}
								onChange={onChangeContent}
								help={__('Optional', 'blue-centered-cta')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>



			<div {...blockProps}>
				<section className="blue-centered-cta container-fluid">
					<div className="blue-centered-cta-wrapper row">
						<div className="col-12 text-center">
							<RichText
								tagName="h2"
								className="cta-heading"
								placeholder={__(
									'Write title…'
								)}
								value={title}
								onChange={onChangeTitle}
							/>

							<RichText
								tagName="p"
								placeholder={__(
									'Write title…'
								)}
								value={content}
								onChange={onChangeContent}
							/>

							<div className="d-flex flex-wrap justify-content-center button-wrapper">
								<InnerBlocks
									renderAppender={InnerBlocks.ButtonBlockAppender}
									template={[
										['create-block/blue-centered-cta-button'],
									]}
									allowedBlocks={[
										'create-block/blue-centered-cta-button',
									]}
								/>

							</div>
						</div>
					</div>
				</section>
			</div>


		</>
	);
};

export default Edit;


