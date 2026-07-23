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
			<section className={`faculty-bio ${lightToggle ? 'light' : ''}`}>
				<div className="container-fluid">
					<div className="row">
						<InnerBlocks.Content />
					</div>
				</div>
			</section>
		</div>




	);
};

export default Save;



