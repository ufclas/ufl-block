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
		attributes: { title, subTitle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();
	return (

		<>

			<div {...blockProps}>
				<section className="showcase-text-image-container">
					<InnerBlocks
						renderAppender={InnerBlocks.ButtonBlockAppender}
						template={[
							['create-block/showcase-text-image-inner'],
						]}
						allowedBlocks={[
							'create-block/showcase-text-image-inner',
						]}
					/>
				</section>
			</div>
		</>
	);
};

export default Edit;


