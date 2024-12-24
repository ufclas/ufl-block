/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle, lightToggle },
	} = props;

	const blockProps = useBlockProps.save();
	return (


		<div {...blockProps}>
			<section className={`faculty-page ${lightToggle ? 'light' : ''}`}>
				{sectionTitle &&
					<div className="title-wrapper">
						<RichText.Content tagName="h1"  className="font-heading" value={sectionTitle} />
						<hr />
					</div>
				}
				<div className="container-fluid">
					<div className="d-flex faculty-row">
						<InnerBlocks.Content />
					</div>
					<div className="d-flex flex-wrap justify-content-center button-wrapper">
						<a id="facultyLoadmore" className={`button animated-border-button button-border-orange button-dark-bg ${lightToggle ? 'loadmore-light' : 'loadmore-dark'}`}>Load More</a>
					</div>
				</div>
			</section>
		</div>

	);
};

export default Save;



