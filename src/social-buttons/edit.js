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
			<div className="col-12 social-column social-column-blue justify-content-center mt-5">
				<InnerBlocks
					template={[
						['create-block/social-icon-facebook'],
						['create-block/social-icon-twitter'],
						['create-block/social-icon-instagram'],
						['create-block/social-icon-youtube'],
						['create-block/social-icon-linkedin'],
					]}
					allowedBlocks={[
						'create-block/social-icon-facebook', 
						'create-block/social-icon-twitter', 
						'create-block/social-icon-instagram', 
						'create-block/social-icon-youtube',
						'create-block/social-icon-linkedin',
					]}
				/>
			</div>
		</>
	);
};

export default Edit;


