/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { blockID, initClosed },
	} = props;

	const blockProps = useBlockProps.save();
	const initStatus = initClosed ? 'closeAll' : 'openFirst';
	return (

		<div {...blockProps}>
			<section className="accordion-section mb-5">
				<div className="container-fluid">
					<div className="row-fluid">
						<div className={"accordion " + initStatus} id={blockID}>
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Save;



