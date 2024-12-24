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
import { useSelect } from '@wordpress/data';
import { RawHTML, useState, useEffect, Component } from '@wordpress/element';
const Edit = (props) => {
	const {
		attributes: { blockID, title, text },
		clientId,
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const updateName = () => {
		setAttributes({ blockID: clientId });
	};

	const [initID, setinitID] = useState('');

	useEffect(() => {
		setinitID(clientId);
		setAttributes({ blockID: "parent" + clientId });
	}, [clientId, setAttributes]);

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeText = (value) => {
		setAttributes({ text: value });
	};


	return (

		<>



			<InspectorControls>
				<PanelBody
					title={__('Tab Block', 'tab-block')}
					initialOpen={true}
				>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Title', 'tab-block')}
								value={title}
								onChange={onChangeTitle}
								help={__('Optional', 'tab-block')}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Description', 'tab-block')}
								value={text}
								onChange={onChangeText}
								help={__('Optional', 'tab-block')}
							/>
						</fieldset>
					</PanelRow>



				</PanelBody>
			</InspectorControls>



			<div {...blockProps}>
				<section className="tab-block pt-5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<RichText
									tagName="h2"
									placeholder={__(
										'Write title…',
										'ufl-block'
									)}
									value={title}
									onChange={onChangeTitle}
									className="text-center"
								/>
								<RichText
									tagName="p"
									placeholder={__(
										'Write title…',
										'ufl-block'
									)}
									value={text}
									onChange={onChangeText}
									className="text-center"
								/>
							</div>
						</div>

						<div className="tab-block-wrapper">
							<div className="desktop-tab-link-col">

								<div className="nav flex-column" id="tab-block" role="tablist">

								</div>
							</div>

							<div className="tab-content-col">
								<div className="tab-content" id={blockID}>

									<InnerBlocks
										renderAppender={InnerBlocks.ButtonBlockAppender}
										template={[
											['create-block/tab-block-inner'],
										]}
										allowedBlocks={[
											'create-block/tab-block-inner',
											'core/freeform'
										]}
									/>



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


