/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { text, title, btnLabel, btnLink, hasLinkNofollow, openNewTab, mediaID, mediaURL, imgAltText },
	} = props;

    const wrapperProps = { className: 'featured-card slick-slide' };

    if ( btnLink ) {
        wrapperProps.href = btnLink;
        wrapperProps.rel = hasLinkNofollow ? 'nofollow' : 'noopener noreferrer';
        wrapperProps.target = openNewTab ? '_blank' : '_self';
    }

	const blockProps = useBlockProps.save();

	const Wrapper = btnLink ? 'a' : 'div';
	return (
		<>
			<Wrapper { ...wrapperProps }>
			<div {...blockProps}>
				<div className="featured-card-inner">
					<div className="feat-card-parralax-wrapper position-relative">
						<img src="/wp-content/plugins/ufl-block/assets/images/feat-card-bg.webp" className="animTop" alt="" />
						<div className="image-box">
							{mediaURL && (
								<img
									className="featured-card-image"
									src={mediaURL}
									alt={imgAltText || ''} 
								/>
							)}

						</div>
					</div>

					<div className="featured-card-title">
						<RichText.Content value={title} />
					</div>
					<div className="featured-card-text">
						<RichText.Content value={text} />
					</div>
					{btnLink && (
                        <div className="animated-underline-button">{btnLabel}</div>
                    )}
				</div>
				</div>
			</Wrapper>

		</>
	);
};

export default Save;


