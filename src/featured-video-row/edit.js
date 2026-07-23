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
		attributes: { sectionTitle, buttonText, buttonLabel },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	return (
		<>

			<div className="row justify-content-center video-row">
				<InnerBlocks

					template={[
						['create-block/featured-video-item'],
					]}
					allowedBlocks={[
						'create-block/featured-video-item',
					]}
				/>
			</div>

		</>
	);
};

export default Edit;


