import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
    {
        attributes: {
        "title": {
            "type": "string",
            "default": ""
        },
        "text": {
            "type": "string",
            "default": ""
        },
        "mediaID": {
            "type": "number",
            "default": ""
        },
        "mediaURL": {
            "type": "string",
            "default": ""
        }
    },
    save: (props) => {
    const {
        attributes: { text, title, mediaID, mediaURL },
    } = props;
    const blockProps = useBlockProps.save();
    return (
        <>


			<div {...blockProps}>
				<section className="title-tool-block w-100">
					<div className="title-tool-block-bg"></div>
					<div className="title-tool-block-inner">
						<div className="title-tool-title">
							<RichText.Content tagName="h1" value={title} />
							<RichText.Content tagName="p" className='sub-header' value={text} />
						</div>
						<div className="tool-link-wrapper">
							<InnerBlocks.Content />
						</div>
					</div>
				</section>
			</div>



		</>
        );
    }
 }
]
export default deprecated;