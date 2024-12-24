/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
  const {
    attributes: { title, subTitle, mediaID, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab },
  } = props;

  const blockProps = useBlockProps.save();
  return (
    <>
      <div {...blockProps}>
        <div className="col-cti">
          <div className="image-box">
            <img
              className="card-image"
              src={mediaURL}
              alt={__('Card Image', 'ufl-block')}
            />
          </div>
          <RichText.Content tagName="p" className="card-text" value={subTitle} />

          {link && (
            <a href={link}
              className="button animated-border-button button-border-orange button-text-dark"
              rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
              target={openNewTab ? "_blank" : "_self"}
            >
              {linkLabel}
            </a>


          )}

        </div>
      </div>
    </>


  );
};

export default Save;



