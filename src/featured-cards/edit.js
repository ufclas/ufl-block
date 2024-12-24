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
		attributes: { sectionTitle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();



	const onChangeSectionTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};


	return (
		<>

			<div {...blockProps}>
				<section className="featured-card-section">
					<div className="featured-card-container container-fluid">
						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/featured-cards-inner'],
							]}
							allowedBlocks={[
								'create-block/featured-cards-inner',
							]}
						/>
					</div>
				</section>
			</div>
		</>
	);
};

export default Edit;


