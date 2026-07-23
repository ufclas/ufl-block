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
			<section className="title-block w-100">
				<div className="container-fluid page-title-container">
					<div className="title-wrapper">
						<RichText.Content tagName="h1" className="font-heading" value={title} />
						<hr />
						{text && (
							<RichText.Content tagName="p" value={text} />
						)}
					</div>
				</div>
			</section>


		</>


	);
};

export default Save;



