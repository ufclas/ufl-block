/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, subText, slideLink, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();

	const content = (
		<>
			<span className="cta-title">
				<RichText.Content value={title} />
			</span>
			<span className="cta-text">
				<RichText.Content value={subText} />
			</span>
		</>
	);
	return (
		<>
			{slideLink ? (
				<a href={slideLink}
					rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
					target={openNewTab ? "_blank" : "_self"}
					className="button card slick-slide">
					{content}
				</a>
			) : (
				<div className='button card slick-slide'>
					{content}
				</div>
			)}

		

		</>


	);
};

export default Save;



