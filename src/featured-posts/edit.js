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



			<div {...blockProps}>
				<section className="news-landing-header">
					<div className="news-hero-wrapper">


						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/featured-post-main'],
								['create-block/featured-post-secondary'],
							]}
							allowedBlocks={[
								'create-block/featured-post-main',
								'create-block/featured-post-secondary'
							]}
						/>

					</div>
				</section>
			</div>




		</>
	);
};

export default Edit;


