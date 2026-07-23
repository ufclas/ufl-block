/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
    const {
        attributes: { text, sectionSubtitle, buttonLabel },
    } = props;

    const blockProps = useBlockProps.save();
    return (

        <div {...blockProps}>
            <section className="single-news-intro">
                <div className="date-share-wrapper">
                    <div className="single-news-date">
                        <InnerBlocks.Content />
                    </div>
                    <div className="single-social-share">
                        <div className="col-12 social-column social-column-grey">
                            <span>Share</span>
                            <div className="sharethis-inline-share-buttons"></div>
                        </div>
                    </div>
                </div>
                {text &&
                    <div className="single-news-highlight">
                        <RichText.Content tagName="p" value={text} />
                        <hr />
                    </div>
                }
            </section>
        </div>

    );
};

export default Save;



