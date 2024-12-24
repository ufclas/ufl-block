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
				<section className="content-carousel—stack">
					<div className="stacked-slider slider">
						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/content-carousel-stack-inner'],
							]}
							allowedBlocks={[
								'create-block/content-carousel-stack-inner',
							]}
						/>
					</div>
					<div className="stacked-arrow-wrapper"></div>
				</section>
			</div>
		</>
	);
};

export default Edit;


