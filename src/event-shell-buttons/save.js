/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { buttonLabel, buttonLink, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>
			<div {...blockProps} >
				<span>

{ buttonLink && (
					<a href={buttonLink}
					className="button animated-border-button button-border-orange button-text-dark"
					rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
					target={openNewTab ? "_blank" : "_self"} >
					{buttonLabel}
				</a>
)}

				</span>
			</div>
		</>


	);
};

export default Save;



