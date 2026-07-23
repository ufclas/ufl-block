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


	const onChangeTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ sectionSubtitle: newContent })
	}

	return (
		<>
			<div className="card-rail-wrapper">
				<InnerBlocks
					template={[
						['create-block/cards-right-rail-cards'],
					]}
					allowedBlocks={[
						'create-block/cards-right-rail-cards',
					]}
				/>
			</div>
		</>
	);
};

export default Edit;


