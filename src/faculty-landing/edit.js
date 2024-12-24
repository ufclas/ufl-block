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
		attributes: { sectionTitle, lightToggle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();



	const onChangeSectionTitle = (value) => {
		setAttributes({ sectionTitle: value });
	};


	const toggleLight = () => {
		setAttributes({ lightToggle: !lightToggle })
	}

	return (
		<>

			<InspectorControls>
				<PanelBody
					title={__('Faculty Listing', 'faculty-listing-carousel')}
					initialOpen={true}
				>

					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Light Version"
								checked={lightToggle}
								onChange={toggleLight}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>

						<fieldset>
							<TextControl
								label={__('Section Title', 'faculty-listing-carousel')}
								value={sectionTitle}
								onChange={onChangeSectionTitle}
								help={__('Optional', 'faculty-listing-carousel')}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>










			<div {...blockProps}>
				<section className={`faculty-page ${lightToggle ? 'light' : ''}`}>
					<div className="title-wrapper">
						<RichText
							tagName="h1"
							className="font-heading"
							placeholder={__(
								'Write title…'
							)}
							value={sectionTitle}
							onChange={onChangeSectionTitle}
						/>
						<hr />
					</div>
					<div className="container-fluid">
						<div className="d-flex faculty-row">

							<InnerBlocks
								renderAppender={InnerBlocks.ButtonBlockAppender}
								template={[
									['create-block/faculty-member-landing'],
								]}
								allowedBlocks={[
									'create-block/faculty-member-landing',
								]}
							/>
						</div>
						<div className="d-flex flex-wrap justify-content-center button-wrapper">
							<a id="facultyLoadmore" className={`button animated-border-button button-border-orange button-dark-bg ${lightToggle ? 'loadmore-light' : 'loadmore-dark'}`}>Load More</a>
						</div>
					</div>
				</section>
			</div>


		</>
	);
};

export default Edit;


