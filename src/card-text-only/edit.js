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
		attributes: { title, buttonText, buttonLabel },
		setAttributes,
	} = props;


	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const blockProps = useBlockProps();

	return (
		<>


			<InspectorControls>
				<PanelBody
					title={__('Cards—Text Only', 'card-text-only')}
					initialOpen={true}
				>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Title', 'card-text-only')}
								value={title}
								onChange={onChangeTitle}
								help={__('Optional', 'card-text-only')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>


			<div {...blockProps}>
				<section className="cards-text-only">
					<div className="row align-items-center">
						<div className="col-12 text-center mb-5">
							<RichText
								tagName="h2"
								placeholder={__(
									'Write title…'
								)}
								value={title}
								onChange={onChangeTitle}
							/>
						</div>
					</div>
					<div className="card-container">
						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/card-text-only-inner'],
							]}
							allowedBlocks={[
								'create-block/card-text-only-inner',
							]}
						/>
					</div>
				</section>
			</div>

		</>
	);
};

export default Edit;


