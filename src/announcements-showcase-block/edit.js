import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, InnerBlocks, PanelColorSettings } from '@wordpress/block-editor';
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
		attributes: { title, content, link, backgroundColor, linkLabel },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent })
	}

	const onChangeLink = (newLink) => {
		setAttributes({ link: newLink })
	}

	const onChangeLinkLabel = (newLinkLabel) => {
		setAttributes({ linkLabel: newLinkLabel === undefined ? '' : newLinkLabel })
	}


	const onChangeBackgroundColor = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor })
	}

	return (
		<>
			<InspectorControls>
			<PanelBody
					title={__('Announcements Showcase', 'announcements-showcase')}
					initialOpen={true}
				>
				</PanelBody>

				<PanelColorSettings
					title={__('Background Color Settings', 'announcements-showcase')}
					initialOpen={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __('Background color', 'announcements-showcase')
						}
					]}
				/>

			</InspectorControls>


			<section {...blockProps} style={{ backgroundColor: backgroundColor }} >
				<div className="container-fluid announcements-showcase-container">
					<div className="d-flex flex-wrap align-items-center justify-content-center">
						<div className="heading-left-col align-items-center">
							<RichText
								tagName="h2"
								placeholder={__(
									'Write title…'
								)}
								value={title}
								onChange={onChangeTitle}
								className='heading-blue'
							/>
						</div>
						<div className="py-5 text-right-col">
							<RichText
								tagName="p"
								placeholder={__(
									'Write title…'
								)}
								value={content}
								onChange={onChangeContent}
							/>
						</div>
					</div>
					<div className="d-flex button-wrapper">


						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/announcement-showcase-button'],
							]}
							allowedBlocks={[
								'create-block/announcement-showcase-button',
							]}
						/>


					</div>
				</div>
			</section>
		</>
	);
};

export default Edit;


