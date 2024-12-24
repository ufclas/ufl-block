/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, text, blockID, buttonLabel, buttonLink, hasLinkNofollow, openNewTab },
	} = props;

	const blockProps = useBlockProps.save();

	return (
		<>



			<div {...blockProps}>
				<div className="accordion-item">
					<span className="accordion-header" id={"heading" + blockID}>
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + blockID} aria-expanded="false" aria-controls={blockID}>
							{title}
						</button>
					</span>
					<div id={"collapse" + blockID} className="accordion-collapse collapse" aria-labelledby={"heading" + blockID}>
						<div className="accordion-body">
							<div className="accordion-body-wrap">
								<InnerBlocks.Content />
							</div>

							<div className="accordion-btn-wrap">

								{buttonLink && (
									<a href={buttonLink}
										rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
										target={openNewTab ? "_blank" : "_self"} >
										{buttonLabel}
									</a>


								)}




							</div>
						</div>
					</div>
				</div>
			</div>
		</>


	);
};

export default Save;



