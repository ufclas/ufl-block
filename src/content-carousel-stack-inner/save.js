/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { text, title, btnLabel, btnLink, hasLinkNofollow, openNewTab, mediaID, mediaURL },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>

			<div className="slider__content">
				<figure className="slider__image">
					<img
						src={mediaURL}
						alt={'Slide Image'}
					/>
				</figure>
				<div className="slider__text">
					<RichText.Content tagName="h2" value={title} />
					<RichText.Content tagName="p" value={text} />
					{btnLink && (

						<a href={btnLink}
							className="button animated-border-button button-border-orange button-text-dark"
							rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
							target={openNewTab ? "_blank" : "_self"}
						>
							{btnLabel}
						</a>

					)}



				</div>
			</div>
		</>


	);
};

export default Save;



