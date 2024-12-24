/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
  const {
    attributes: { blockID, title, text },
  } = props;

  const blockProps = useBlockProps.save();
  return (


    <div {...blockProps}>
      <section className="tab-block pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
            { title && (
            <RichText.Content tagName="h2" class="text-center" value={title} />
            )}

            { text && (
             <RichText.Content tagName="p" class="text-center" value={text} />
            )}

             
            </div>
          </div>
          <div className="tab-block-wrapper">
            <div className="desktop-tab-link-col">
              <div className="nav flex-column" id="tab-block" role="tablist">
              </div>
            </div>
            <div className="tab-content-col">
              <div className="tab-content" id={blockID}>
                <InnerBlocks.Content />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



  );
};

export default Save;



