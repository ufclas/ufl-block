/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
  const {
    attributes: { title, subTitle, content, linktext, link, hasLinkNofollow, openNewTab },
  } = props;

  const blockProps = useBlockProps.save();
  return (
    <>
      {link ? (


        <div className="card-right-rail">
          <div className="card-right-rail-inner-wrapper position-relative" >
            <p className="crr-header">{title}</p>
            {subTitle && <p className="crr-sub-header">{subTitle}</p>}
            <p className="crr-text">{content}</p>
            <a href={link}
              rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
              target={openNewTab ? "_blank" : "_self"}>
              <span className="visually-hidden">{linktext}</span>
            </a>
            <span className="animated-underline-button">{linktext}</span>
          </div>
        </div>

      ) : (

        <div className="card-right-rail">
          <div className="card-right-rail-inner-wrapper position-relative" >
            <p className="crr-header">{title}</p>
            {subTitle ? (
              <p className="crr-sub-header">{subTitle}</p>
            ) : ('')}
            <p className="crr-text">{content}</p>
          </div>
        </div>

      )}
    </>
  );
};

export default Save;



