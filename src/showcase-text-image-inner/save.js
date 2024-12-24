/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
  const {
    attributes: { title, subTitle, mediaID, mediaSide, mediaURL, link, linkLabel, hasLinkNofollow, openNewTab },
  } = props;

  const blockProps = useBlockProps.save();
  return (
    <>


      {mediaSide ? (


        <div {...blockProps}>
          <section className="showcase-text-image">
            <div className="container-fluid px-0">
              <div className="row no-gutters text-image-row text-left-row bg-white">
                <div className="col-text">
                  <div className="col-text-inner">
                    <RichText.Content tagName="h2" value={title} />
                    <RichText.Content tagName="p" value={subTitle} />
                    <span className="sti-btn-wrap">
                      {link && (
                        <a href={link}
                          className="button animated-border-button button-border-blue button-text-dark"
                          rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
                          target={openNewTab ? "_blank" : "_self"}
                        >
                          {linkLabel}
                        </a>
                      )}

                    </span>
                  </div>
                </div>
                <div className="col-image" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
              </div>
            </div>
          </section>
        </div>

      ) : (

        <div {...blockProps}>
          <section className="showcase-text-image">
            <div className="container-fluid px-0">
              <div className="row no-gutters text-image-row text-row-right bg-white">
                <div className="col-image" style={{ backgroundImage: "url(" + mediaURL + ")" }}></div>
                <div className="col-text">
                  <div className="col-text-inner">
                    <RichText.Content tagName="h2" value={title} />
                    <RichText.Content tagName="p" value={subTitle} />
                    <span className="sti-btn-wrap">
                      {link && (
                        <a href={link}
                          className="button animated-border-button button-border-blue button-text-dark"
                          rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
                          target={openNewTab ? "_blank" : "_self"}
                        >
                          {linkLabel}
                        </a>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


      )}


    </>


  );
};

export default Save;



