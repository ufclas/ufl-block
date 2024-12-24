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

	const ALLOWED_BLOCKS = [
		'core/paragraph',
		'core/freeform',
	];

	const TEMPLATE = [
		['core/freeform', {
			placeholder: 'Enter Intro content...',
		}]
	];


	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Faculty Bio Quote', 'block-quote')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Quotee Name', 'block-quote')}
								value={name}
								onChange={onChangeName}
								help={__('', 'block-quote')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Quotee Title', 'block-quote')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'block-quote')}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>




			<div {...blockProps} >
				<section className="faculty-blockquote-section blockquote-section w-100 position-relative">
					<div className="container-fluid">
						<div className="row d-flex justify-content-center align-items-center">
							<div className="col col-lg-12">
								<div className="card">
									<blockquote className="blockquote text-white">
										<span>
											<span className="quote text-white">
												<InnerBlocks
													allowedBlocks={ALLOWED_BLOCKS}
													template={TEMPLATE}
												/>
											</span>
											<span className="quotee text-white"> —
												<RichText
													placeholder={__(
														'Write title…',
														'gutenberg-examples'
													)}
													value={name}
													onChange={onChangeName}
												/>
												{title && `,`}
												<RichText
													placeholder={__(
														'Write title…',
														'gutenberg-examples'
													)}
													value={title}
													onChange={onChangeTitle}
												/>
											</span>
										</span>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>



		</>
	);
};

export default Edit;



