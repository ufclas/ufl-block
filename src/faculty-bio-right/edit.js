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
		attributes: { sectionTitle, sectionsubtitle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeSectionTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};

	const onChangeSectionSUBTitle = (value) => {
		setAttributes({ sectionsubtitle: value });
	};


	const ALLOWED_BLOCKS = [
		'core/heading',
		'core/paragraph',
		'core/list',
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
					title={__('Optional Heading', 'faculty-listing-carousel')}
					initialOpen={true}
				>
					<PanelRow>

						<fieldset>
							<TextControl
								label={__('Section Title', 'faculty-listing-carousel')}
								value={sectionTitle}
								onChange={onChangeSectionTitle}
								help={__('', 'faculty-listing-carousel')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>

						<fieldset>
							<TextControl
								label={__('Section Title', 'faculty-listing-carousel')}
								value={sectionsubtitle}
								onChange={onChangeSectionSUBTitle}
								help={__('', 'faculty-listing-carousel')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>

			<div className="col-12 col-lg-7 faculty-bio-info">

				<div {...blockProps}>
					<h1>{sectionTitle}</h1>
					<h2>{sectionsubtitle}</h2>
					<hr />
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
					/>
				</div>
			</div>


		</>
	);
};

export default Edit;


