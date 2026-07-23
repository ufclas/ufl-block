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
		attributes: { sectionTitle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();



	const onChangeSectionTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};


	return (
		<>

			<InspectorControls>
				<PanelBody
					title={__('Optional Heading', 'event-shell-inner-block')}
					initialOpen={true}
				>
					<PanelRow>

						<fieldset>
							<TextControl
								label={__('Section Title', 'event-shell-inner')}
								value={sectionTitle}
								onChange={onChangeSectionTitle}
								help={__('', 'event-shell-inner')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>


			<div {...blockProps}>
				<section className="event-shell">
					<div className="event-shell-wrapper">

						<div className="col-12 text-center">
							<RichText
								tagName="h2"
								placeholder={__(
									'Write title…'
								)}
								value={sectionTitle}
								onChange={onChangeSectionTitle}
							/>
						</div>


						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/event-shell-slider'],
								['create-block/event-shell-button-wrapper'],
							]}
							allowedBlocks={[
								'create-block/event-shell-slider',
								'create-block/event-shell-button-wrapper',
							]}

						/>




					</div>
				</section>
			</div>
		</>
	);
};

export default Edit;


