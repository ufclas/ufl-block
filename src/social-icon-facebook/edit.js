import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
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
		attributes: { slideLink, hasLinkNofollow, openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeLink = (value) => {
		setAttributes({ slideLink: value });
	};

	const toggleNofollow = () => {
		setAttributes({ hasLinkNofollow: !hasLinkNofollow })
	}
	
	const toggleNewTab = () => {
		setAttributes({ openNewTab: !openNewTab })
	}

	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Social Link Settings', 'social-icon-facebook')}
					initialOpen={true}
				>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Social Post Link', 'social-icon-facebook')}
								value={slideLink}
								onChange={onChangeLink}
								help={__('', 'social-icon-facebook')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
<fieldset>
    <ToggleControl
        label="Open in New Tab?"
        help={
            openNewTab
                ? 'Has rel nofollow.'
                : 'No rel nofollow.'
        }
        checked={openNewTab}
        onChange={toggleNewTab}
    />
</fieldset>
</PanelRow>

				</PanelBody>
			</InspectorControls>


			<ExternalLink
				href={slideLink}
				className="facebook-icon"
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"} >
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="ufl-brands ufl-facebook"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
				<span className="visually-hidden">Facebook Icon</span>
			</ExternalLink>





		</>
	);
};

export default Edit;



