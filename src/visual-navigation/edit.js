import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
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
		attributes: { sectionTitle, sectionSubtitle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();


	const onChangeTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ sectionSubtitle: newContent })
	}

	return (
		<>


			<InspectorControls>
				<PanelBody
					title={__('Visual Navigation', 'visual-navigation')}
					initialOpen={true}
				>
					<PanelRow>

						<fieldset>
							<TextControl
								label={__('Title', 'visual-navigation')}
								value={sectionTitle}
								onChange={onChangeTitle}
								help={__('Optional', 'visual-navigation')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>

						<fieldset>
							<TextControl
								label={__('Description', 'visual-navigation')}
								value={sectionSubtitle}
								onChange={onChangeContent}
								help={__('Optional', 'visual-navigation')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<section className="visual-navigation">
					<div className="visual-navigation-intro">
						<RichText
							tagName="h2"
							placeholder={__(
								'Write title…'
							)}
							value={sectionTitle}
							onChange={onChangeTitle}
						/>
						<RichText
							tagName="p"
							placeholder={__(
								'Write title…'
							)}
							value={sectionSubtitle}
							onChange={onChangeContent}
						/>
					</div>
					<div className="visual-navigation-wrapper row">

						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/visual-navigation-item'],
							]}
							allowedBlocks={[
								'create-block/visual-navigation-item'
							]}
						/>
					</div>
				</section>
			</div>

		</>
	);
};

export default Edit;


