/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import $ from 'jquery';
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';


const Save = (props) => {
	const {
		attributes: { ctaText, kaLink, linkLabel, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>
			<div {...blockProps} >
				<span>
				{ kaLink && (
					<a href={kaLink}
					className="cta-button"
					rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
					target={openNewTab ? "_blank" : "_self"}  >
					<span className="cta-title">{linkLabel}</span>
					<span className="cta-text">{ctaText}</span>
				</a>
)}

				</span>
			</div>

		</>
	);
};


export default Save;

