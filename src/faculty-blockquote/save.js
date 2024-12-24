/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
  const {
    attributes: { name, text, title },
  } = props;

  const blockProps = useBlockProps.save();
  return (
    <>

      <div {...blockProps}>
        <section className="faculty-blockquote-section blockquote-section w-100 position-relative">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col col-lg-12">
                <div className="card">
                  <blockquote className="blockquote text-white">
                    <span>
                      <span className="quote text-white">
                        <InnerBlocks.Content />
                      </span>
                      <span className="quotee text-white"> 
                        {name && `- ${name}`}
                        {title && `, ${title}`}
                      </span>
                    </span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>



    </>


  );
};

export default Save;



