/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
  const {
    attributes: { title, subTitle, mediaID, mediaURL, link, hasLinkNofollow, openNewTab },
  } = props;

  const blockProps = useBlockProps.save();
  return (
    <>


      <a
      className="col-12 col-md-4 mb-4 position-relative slider-col"
      href={link}
      rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
      target={openNewTab ? "_blank" : "_self"}
      >
        <div className="p-4 slider-content-wrapper">
          <div className="mb-4">
          { mediaURL && (
            <img className="img-fluid " src={mediaURL} alt="post featured image" />
         ) }
            
          </div>
          <RichText.Content className='slide-title mb-3' tagName="p" value={title} />
          <RichText.Content className="slide-subtext" tagName="p" value={subTitle} />
        </div>
      </a>


    </>


  );
};

export default Save;



