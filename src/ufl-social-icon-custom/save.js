/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { slideLink, hasLinkNofollow, openNewTab, backgroundColor, iconColor, mediaID, mediaURL, backgroundHoverColor, blockID  },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>
			<style>
                {`
                #icon-button${blockID}:hover {
                    background-color: ${backgroundHoverColor} !important;
                }

                `}
            </style>
			<div {...blockProps}>
			<a
				href={slideLink}
				className="facebook-icon"
				id={"icon-button"+blockID}
				rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				target={openNewTab ? "_blank" : "_self"}
				style={{ backgroundColor: backgroundColor }} >
				<img className="ufl-brands ufl-custom" src={mediaURL} />
				<span className="visually-hidden">Social Icon</span>
			</a>
			</div>
		</>


	);
};

export default Save;



