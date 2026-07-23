import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { Button } from '@wordpress/components';

const Edit = (props) => {
  const blockProps = useBlockProps();
  const { clientId } = props;
  const innerBlockCount = useSelect((select) => select('core/block-editor').getBlock(clientId).innerBlocks);


  const appenderToUse = () => {
    if (innerBlockCount.length < 8) {
      return (
        <InnerBlocks.ButtonBlockAppender />
      );
    } else {
      return false;
    }
  }


  return (
    <div {...blockProps}>
      <div className="carousel-item active">
        <div className="img-gallery-container overflow-hidden">
          <div className="row g-0">
            <InnerBlocks
              renderAppender={() => appenderToUse()}
              orientation="horizontal"
              template={[
                ['create-block/image-modal'],
                ['create-block/image-modal'],
                ['create-block/image-modal'],
                ['create-block/image-modal'],
              ]}
              allowedBlocks={['create-block/image-modal']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
