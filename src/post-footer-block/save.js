/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: {name, email, phone, title, subTitle, mediaID, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();
	return (
	<>



<div { ...blockProps }>
<section className="single-news-footer-wrapper">
    <div className="single-news-footer">
        <div className="d-flex gx-0 single-news-meta">
            <p>Story By:</p>
            <RichText.Content tagName='p' value={ name } />
			<span>/</span>
			<RichText.Content value={ email } />
			<span>/</span>
			<RichText.Content value={ phone } />
        </div>
    </div>
</section>
</div>


  </>


	);
};

export default Save;



