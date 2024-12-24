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
					title={__('Showcase—Text Only', 'showcase-text-only-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Title', 'showcase-text-only')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'showcase-text-only')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__('Description', 'showcase-text-only')}
								value={content}
								onChange={onChangeContent}
								help={__('Optional', 'showcase-text-only')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>



			<section {...blockProps}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 text-center">
							<RichText
								tagName="h2"
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
										['create-block/showcase-text-only-button'],
									]}
									allowedBlocks={[
										'create-block/showcase-text-only-button',
									]}
								/>
							</div>



						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default Edit;


