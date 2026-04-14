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
		attributes: { sectionTitle, blackAndWhiteHoverToggle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();



	const onChangeSectionTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};

	const toggleBlackAndWhite = () => {
		setAttributes({ blackAndWhiteHoverToggle: !blackAndWhiteHoverToggle })
	}

	return (
		<>

			<InspectorControls>
				<PanelBody
					title={__('Faculty Listing Carousel', 'faculty-listing-carousel')}
					initialOpen={true}
				>
					<PanelRow>

						<fieldset>
							<TextControl
								label={__('Title', 'faculty-listing-carousel')}
								value={sectionTitle}
								onChange={onChangeSectionTitle}
								help={__('', 'faculty-listing-carousel')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Black and White Hover"
								checked={blackAndWhiteHoverToggle}
								onChange={toggleBlackAndWhite}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>













			<div {...blockProps}>
				<section className={`faculty-listing-carousel-wrapper ${blackAndWhiteHoverToggle ? 'black-and-white-hover' : ''}`}>
					<RichText
						className="text-center text-white"
						tagName="h2"
						placeholder={__(
							'Write title…'
						)}
						value={sectionTitle}
						onChange={onChangeSectionTitle}
					/>


					<div className="faculty-listing-carousel">

						<InnerBlocks
							renderAppender={InnerBlocks.ButtonBlockAppender}
							template={[
								['create-block/faculty-listing-carousel-inner'],
							]}
							allowedBlocks={[
								'create-block/faculty-listing-carousel-inner',
							]}
						/>

					</div>
				</section>
			</div>
		</>
	);
};

export default Edit;


