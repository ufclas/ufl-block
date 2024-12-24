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
		attributes: { sectionTitle, lightToggle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();



	const onChangeSectionTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};

	const toggleLight = () => {
		setAttributes({ lightToggle: !lightToggle })
	}



	return (
		<>

			<InspectorControls>
				<PanelBody
					title={__('faculty Bio', 'faculty-listing-carousel')}
					initialOpen={true}
				>

					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Light Version"
								checked={lightToggle}
								onChange={toggleLight}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>





			<div {...blockProps}>
				<section className={`faculty-bio ${lightToggle ? 'light' : ''}`}>
					<div className="container-fluid">
						<div className="row">

							<InnerBlocks
								renderAppender={InnerBlocks.ButtonBlockAppender}
								template={[
									['create-block/faculty-bio-left'],
									['create-block/faculty-bio-right'],
								]}
								allowedBlocks={[
									'create-block/faculty-bio-left',
									'create-block/faculty-bio-right',
									'create-block/faculty-blockquote',
								]}
							/>

						</div>
					</div>
				</section>
			</div>


		</>
	);
};

export default Edit;


