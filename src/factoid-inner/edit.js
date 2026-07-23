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
		attributes: { factoidNumber, factoidSubText, factoidSubHead },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeNumber = (value) => {
		setAttributes({ factoidNumber: value });
	};

	const onChangeSubHead = (newSubHead) => {
		setAttributes({ factoidSubHead: newSubHead })
	}

	const onChangefactoidSubText = (newfactoidSubText) => {
		setAttributes({ factoidSubText: newfactoidSubText })
	}


	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Factoids', 'ufl-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Impact Number', 'ufl-block')}
								value={factoidNumber}
								onChange={onChangeNumber}
								help={__('', 'ufl-block')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Title', 'ufl-block')}
								value={factoidSubHead}
								onChange={onChangeSubHead}
								help={__('', 'ufl-block')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Card Description', 'ufl-block')}
								value={factoidSubText}
								onChange={onChangefactoidSubText}
								help={__('', 'ufl-block')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>


			<div className="col-12 col-md-4 text-center col-lg-4 px-5 flex-fill factoid-col">
				<div {...blockProps} >
					<RichText
						tagName="p"
						placeholder={__(
							'Impact Number',
							'ufl-block'
						)}
						value={factoidNumber}
						onChange={onChangeNumber}
						className='factoid-number' />

					<RichText
						tagName="p"
						placeholder={__(
							'Factoid Title',
							'ufl-block'
						)}
						value={factoidSubHead}
						onChange={onChangeSubHead}
						className='factoid-subhead' />


					<RichText
						tagName="p"
						placeholder={__(
							'Factoid Title',
							'ufl-block'
						)}
						value={factoidSubText}
						onChange={onChangefactoidSubText}
						className='factoid-subtext' />
				</div>
			</div>


		</>
	);
};

export default Edit;



