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

			<div className="event-shell-carousel py-5">
				<InnerBlocks
					renderAppender={InnerBlocks.ButtonBlockAppender}
					template={[
						['create-block/event-shell-slide'],
					]}
					allowedBlocks={[
						'create-block/event-shell-slide',
					]}
				/>
			</div>


		</>
	);
};

export default Edit;


