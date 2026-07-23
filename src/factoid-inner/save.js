/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { factoidNumber, factoidSubText, factoidSubHead },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>

			<div className="col-12 col-md-4 text-center col-lg-4 px-5 flex-fill factoid-col">
				<div {...blockProps} >
					<RichText.Content tagName="p" className='factoid-number' value={factoidNumber} />
					<RichText.Content tagName="p" className='factoid-subhead' value={factoidSubHead} />
					<RichText.Content tagName="p" className='factoid-subtext' value={factoidSubText} />
				</div>
			</div>


		</>


	);
};

export default Save;



