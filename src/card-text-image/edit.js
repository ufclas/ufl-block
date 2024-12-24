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
		attributes: { title, subTitle },
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
					title={__('Cards—Text + Image', 'card-text-image-inner')}
					initialOpen={true}
				>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Title', 'card-text-image-inner')}
								value={title}
								onChange={onChangeTitle}
								help={__('Optional', 'card-text-image-inner')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>

			<section className="cards-text-image bg-white position-relative" {...blockProps}>
				<div className="cards-text-image-inner-wrapper">
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

					<div className="d-flex justify-content-center text-center col-wrapper">

						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/card-text-image-inner'],
							]}
							orientation="horizontal"
							allowedBlocks={[
								'create-block/card-text-image-inner',
							]}
						/>

					</div>
				</div>
			</section>

		</>
	);
};

export default Edit;


