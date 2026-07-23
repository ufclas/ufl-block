import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, subTitle, mediaURL, link, hasLinkNofollow, openNewTab, imgAltText },
	} = props;

	const blockProps = useBlockProps.save({
		className: "col-12 col-md-4 mb-4 position-relative slider-col"
	});

	return (
		<li {...blockProps}>
			<div className="p-4 slider-content-wrapper">
				<div className="mb-4">
					{mediaURL && (
						<img
							className="img-fluid"
							src={mediaURL}
							alt={imgAltText || ''}
						/>
					)}
				</div>
				<p className="slide-title mb-3">
					{link ? (
						<a
							href={link}
							className="stretched-link"
							rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
							target={openNewTab ? "_blank" : "_self"}
						>
							<RichText.Content value={title} />
							{openNewTab && (
								<span className="visually-hidden">
									{__('(opens in a new tab)', 'slider-manual-inner')}
								</span>
							)}
						</a>
					) : (
						<RichText.Content value={title} />
					)}
				</p>
				<RichText.Content
					tagName="p"
					className="slide-subtext"
					value={subTitle}
				/>
			</div>
		</li>
	);
};

export default Save;