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
		attributes: { sectionTitle, loadmore },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();


	const onChangeTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};

	const onChangeloadmore = (newloadmore) => {
		setAttributes({ loadmore: newloadmore })
	}

	return (
		<>


			<div {...blockProps}>
				<section className="featured-video">
					<div className="row align-items-center">
						<div className="col-12 text-left mb-5">
							<RichText
								tagName="h2"
								placeholder={__(
									'Write title…'
								)}
								value={sectionTitle}
								className="text-white"
								onChange={onChangeTitle}
							/>
						</div>
					</div>
					<div className="container-fluid multiple-video-container">
						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/featured-vimeo-row'],
							]}
							allowedBlocks={[
								'create-block/featured-vimeo-row'
							]}
						/>
						<a className="video-load-more button animated-border-button button-border-orange button-dark-bg">Load More</a>
					</div>
				</section>
			</div>





		</>
	);
};

export default Edit;


