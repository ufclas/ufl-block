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

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangesubTitle = (newsubTitle) => {
		setAttributes({ subTitle: newsubTitle })
	}

	return (

		<>



			<section {...blockProps}>


				<div className="col-12 text-center">
					<RichText
						tagName="h2"
						placeholder={__(
							'Write title…',
							'gutenberg-examples'
						)}
						value={title}
						onChange={onChangeTitle}
					/>
					<RichText
						tagName="p"
						placeholder={__(
							'Write title…',
							'gutenberg-examples'
						)}
						onChange={onChangesubTitle}
						className='lead'
						value={subTitle}
					/>


				</div>






				<div className="d-flex cta-button-wrapper">
					<InnerBlocks
						renderAppender={InnerBlocks.ButtonBlockAppender}
						template={[
							['create-block/cta-button-block'],
						]}
						allowedBlocks={[
							'create-block/cta-button-block',
						]}

					/>
				</div>

			</section>
		</>
	);
};

export default Edit;



