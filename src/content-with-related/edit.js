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
		attributes: { sectionTitle, sectionSubtitle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const ALLOWED_BLOCKS = [
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/image',
		'core/image',
		'core/freeform',
	];



	const TEMPLATE = [
		['create-block/content-with-related-content'],
		['create-block/content-with-related-card-wrapper'],
	];

	return (
		<>


			<div {...blockProps}>
				<div className="news-body-wrapper position-relative">

					<InnerBlocks
						template={TEMPLATE}
					/>


				</div>
			</div>


		</>
	);
};

export default Edit;


