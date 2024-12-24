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
	];

	const TEMPLATE = [
		['create-block/cards-right-rail-content'],
		['create-block/cards-right-rail-card-wrapper'],
	];

	return (
		<>

			<section className="fullwidth-text-block card-right-rail-section position-relative">
				<div {...blockProps}>
					<InnerBlocks
						template={TEMPLATE}
					/>
				</div>
			</section>


		</>
	);
};

export default Edit;


