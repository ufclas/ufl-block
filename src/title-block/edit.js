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
		attributes: { name, text, title },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (newvalue) => {
		setAttributes({ title: newvalue });
	};

	const onChangeText = (value) => {
		setAttributes({ text: value });
	};

	const onChangeName = (newName) => {
		setAttributes({ name: newName })
	}


	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Title Block', 'title-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Title', 'title-block')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'title-block')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Title Text Block', 'title-block')}
								value={text}
								onChange={onChangeText}
								help={__('Optional', 'title-block')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>


			<section className="title-block w-100">
				<div className="container-fluid page-title-container">
					<div className="title-wrapper">
						<RichText
							tagName="h1"
							placeholder={__(
								'Page Title',
								'ufl-block'
							)}
							value={title}
							onChange={onChangeTitle}
							className="font-heading"
						/>

						<hr />
						<RichText
							tagName="p"
							placeholder={__(
								'Page Sub-Text',
								'ufl-block'
							)}
							value={text}
							onChange={onChangeText}
						/>
					</div>
				</div>
			</section>



		</>
	);
};

export default Edit;



