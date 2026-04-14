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

	
	// Build rel value safely
	const relParts = [];
	if (openNewTab) {
		// Required for security when using target=_blank
		relParts.push('noopener', 'noreferrer');
	}
	if (hasLinkNofollow) {
		relParts.push('nofollow');
	}
	const relValue = relParts.length ? relParts.join(' ') : undefined;

	// Accessible labeling:
	// - Visible text remains {buttonLabel}
	// - Add SR-only suffix when opening in a new tab
	const opensNewTabText = __('(opens in a new tab)', 'announcements-showcase');

	// If label is empty, provide a fallback (helps SR users and sighted users)
	const visibleLabel = buttonLabel && String(buttonLabel).trim().length
		? buttonLabel
		: __('Learn more', 'announcements-showcase');

	// Optionally mirror to aria-label (keeps it concise but explicit about new tab)
	const ariaLabel = openNewTab
		? `${visibleLabel} ${opensNewTabText}`
		: visibleLabel;


return (
		<>
			<div {...blockProps} >
				<span>

					{buttonLink && (
						<a
							href={buttonLink}
							className="animated-underline-button"
							rel={relValue}
							aria-label={ariaLabel}
							target={openNewTab ? "_blank" : "_self"} >
							{visibleLabel}
							{openNewTab && (
								// Visually-hidden helper for sighted keyboard/sr users
								<span className="screen-reader-text"> {opensNewTabText}</span>
							)}

						</a>
					)}

				</span>
			</div>
		</>


	);
};

export default Save;



