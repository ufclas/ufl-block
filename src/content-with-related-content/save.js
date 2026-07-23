/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { sectionTitle, buttonText, buttonLabel },
	} = props;

	const blockProps = useBlockProps.save();
	return (


		<div className="single-news-body-content">
			<section className="single-news-body">
				<div className="container-fluid gx-0">
					<InnerBlocks.Content />
				</div>
			</section>
		</div>


	);
};

export default Save;



