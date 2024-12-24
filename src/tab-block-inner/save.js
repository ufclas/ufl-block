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
					<button className="tab-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + blockID} aria-expanded="true" aria-controls={"collapse" + blockID} tabIndex="0" id={"heading" + blockID}>
						{title}
					</button>
					<div id={"collapse" + blockID} className="accordion-collapse collapse" aria-labelledby={"heading" + blockID} >
						<div className="accordion-body">
							<RichText.Content tagName="h3" value={title} />

							<div className="tab-body-wrap">
								<InnerBlocks.Content />
							</div>

							<div className="tab-btn-wrap">

								{buttonLink && (

									<a
										href={buttonLink}
										className='animated-underline-button'
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



