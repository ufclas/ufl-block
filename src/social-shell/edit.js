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
				<section className="social-media-shell">
					<div className="social-media-shell-wrapper">
						<p className="social-media-shell-title">Follow Our College</p>

						<div className="social-feed row">
							<InnerBlocks
								orientation="horizontal"
								template={[
									['create-block/social-shell-insta'],
									['create-block/social-shell-twitter'],
									['create-block/social-buttons'],
								]}
								allowedBlocks={[
									'create-block/social-shell-insta',
									'create-block/social-shell-twitter',
									'create-block/social-buttons',
								]}
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Edit;


