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
			<div className="col-12 ufl-social-column justify-content-center">
				<InnerBlocks
					template={[
						['create-block/ufl-social-icon-facebook'],
						['create-block/ufl-social-icon-twitter'],
						['create-block/ufl-social-icon-instagram'],
						['create-block/ufl-social-icon-youtube'],
					]}
					allowedBlocks={[
						'create-block/ufl-social-icon-facebook', 'create-block/ufl-social-icon-twitter', 'create-block/ufl-social-icon-instagram', 'create-block/ufl-social-icon-youtube', 'create-block/ufl-social-icon-custom'
					]}
				/>
			</div>
			</div>
		</>
	);
};

export default Edit;


