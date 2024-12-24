/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { date, time, title, subText, slideLink, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>

			<a href={slideLink} 
			rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
			target={openNewTab ? "_blank" : "_self"}
			className="upcoming-events-item slick-slide event-link" 
			>
				<div className="inner-txt">
					<RichText.Content tagName="p" className='date' value={date} />
					<RichText.Content tagName="p" className='time' value={time} />
					<hr />
					<RichText.Content tagName="h3" value={title} />
					<RichText.Content tagName="p" className='event-subtext' value={subText} />
				</div>
			</a>

		</>


	);
};

export default Save;



