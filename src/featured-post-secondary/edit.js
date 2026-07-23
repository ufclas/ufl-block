import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	TextareaControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';

const Edit = (props) => {
	const {
		attributes: { sectionTitle, sectionSubtitle },
		setAttributes,
	} = props;
	const { clientId } = props;
	const innerBlockCount = useSelect((select) => select('core/block-editor').getBlock(clientId).innerBlocks);
	const blockProps = useBlockProps();


	const onChangeTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ sectionSubtitle: newContent })
	}

	const appenderToUse = () => {
		if (innerBlockCount.length < 2) {
		  return (
			<InnerBlocks.ButtonBlockAppender />
		  );
		} else {
		  return false;
		}
	  }

	  

	return (
		<>

			<div className="news-hero-supporting">

				<InnerBlocks
					  renderAppender={() => appenderToUse()}
					template={[
						['create-block/featured-post-supporting'],
						['create-block/featured-post-supporting'],
					]}
					allowedBlocks={[
						'create-block/featured-post-supporting'
					]}
				/>

			</div>

		</>
	);
};

export default Edit;


