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
		attributes: { blockID, initClosed },
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
		setAttributes({ initClosed: initClosed ? true : false })
	}, [clientId, setAttributes]);

	const toggleInitClosed = () => {
		setAttributes({ initClosed: !initClosed })
	}

	return (

		<>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Initialize all accordions closed"
								checked={initClosed}
								onChange={toggleInitClosed}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<section className="accoridon-section mb-5">
					<div className="container-fluid">
						<div className="row-fluid">
							<div className="accordion" id={blockID}>
								<InnerBlocks
									renderAppender={InnerBlocks.ButtonBlockAppender}
									template={[
										['create-block/accordion-block-inner'],
									]}
									allowedBlocks={[
										'create-block/accordion-block-inner',
									]}

								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Edit;


