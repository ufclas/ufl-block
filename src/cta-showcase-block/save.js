/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, subTitle },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<section {...blockProps} >
			<div className="col-12 text-center">


			{title && (
					<RichText.Content tagName="h2" value={title} />
				)}
				

				{subTitle && (
					<RichText.Content tagName="p" className='lead' value={subTitle} />
				)}
				{!subTitle && (
					<span style="margin-bottom: 40px;display: block;"></span>
				)}

			</div>

			<div className="d-flex cta-button-wrapper">
				<InnerBlocks.Content />
			</div>

		</section>
	);
};

export default Save;



