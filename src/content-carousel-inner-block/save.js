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

      <div className="slick-slide position-relative">
        <div className="w-100">
          <div className="animLines-wrapper">
            <div className="smallBar_left-wrapper">
              <span className="smallBar_left animLines">
                <img src="/wp-content/plugins/ufl-block/assets/images/thin-left.webp" aria-hidden="true" alt="horizontal orange line" />
              </span>
            </div>
            <div className="largeBar-wrapper">
              <span className="largeBar animLines">
                <img src="/wp-content/plugins/ufl-block/assets/images/largeBar.webp" aria-hidden="true" alt="horizontal orange line" />
              </span>
            </div>

            <div className="largeBar_bottom-wrapper">
              <span className="largeBar_bottom animLines">
                <img src="/wp-content/plugins/ufl-block/assets/images/largeBar_bottom.webp" aria-hidden="true" alt="horizontal orange line" />
              </span>
            </div>

            <div className="smallBar-wrapper">
              <span className="smallBar animLines">
                <img src="/wp-content/plugins/ufl-block/assets/images/smallBar.webp" aria-hidden="true" alt="horizontal orange line" />
              </span>
            </div>
          </div>

          <div className="row g-0">
            <div className="col-md-6">
              <RichText.Content tagName="h2" value={title} />
              <RichText.Content tagName="p" value={subTitle} />
            </div>
            <div className="col-md-5 button-col">
              {link && (
                <a href={link}
                  className="button animated-border-button button-border-orange button-text-light"
                  rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
                  target={openNewTab ? "_blank" : "_self"}
                >
                  {linkLabel}
                </a>
              )}
            </div>
          </div>
          {mediaURL && (
            <div className="cc-bg-img" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
          )}

        </div>
      </div>
    </>


  );
};

export default Save;



