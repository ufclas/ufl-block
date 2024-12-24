/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { slideLink, hasLinkNofollow, openNewTab, backgroundColor, iconColor, backgroundHoverColor, iconHoverColor, blockID  },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>

			<style>
                {`
                #icon-button${blockID}:hover {
                    background-color: ${backgroundHoverColor} !important;
                }

				#icon-button${blockID}:hover svg path {
                    fill: ${iconHoverColor} !important;
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="ufl-brands ufl-facebook"><path fill={iconColor} d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
				<span className="visually-hidden">Facebook Icon</span>
			</a>
</div>
		</>


	);
};

export default Save;



