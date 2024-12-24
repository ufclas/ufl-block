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
		attributes: { text, sectionSubtitle },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();


	const onChangeTitle = (value) => {
		setAttributes({ text: value });
	};

	return (
		<>


			<InspectorControls>
				<PanelBody
					title={__('Block Settings', 'featured-post-supporting')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Featured Post Content', 'featured-post-supporting')}
								value={text}
								onChange={onChangeTitle}
								help={__('', 'featured-post-supporting')}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>



			<div {...blockProps}>


				<section className="single-news-intro">

					<div className="date-share-wrapper">
						<div className="single-news-date">
						<InnerBlocks
							template={ [
								[ 'core/post-date' ],
							] }
							allowedBlocks={ [
								'core/post-date',
							] }
							templateLock="all"
						/>
						</div>

						<div className="single-social-share">
							<div className="col-12 social-column social-column-grey">
								<span>Share</span>
								<div className="sharethis-inline-share-buttons"></div>
							</div>
						</div>
					</div>


					{text &&
						<div className="single-news-highlight">
							<RichText
								tagName="p"
								placeholder={__(
									'Write title…',
									'gutenberg-examples'
								)}
								value={text}
								onChange={onChangeTitle}
							/>

							<hr />
						</div>
					}

				</section>

			</div>

		</>
	);
};

export default Edit;


