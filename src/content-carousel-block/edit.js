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
				<section id="contentCarousel" className="content-carousel">
					<div className="carousel-inner content-carousel-slide" dir="rtl">
						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/content-carousel-inner-block'],
							]}
							allowedBlocks={[
								'create-block/content-carousel-inner-block',
							]}
						/>
					</div>
				</section>
			</div>
		</>
	);
};

export default Edit;


