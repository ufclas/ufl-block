/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, content, blockID, modalTarget, mediaID, mediaURL  },
	} = props;

	const blockProps = useBlockProps.save();
	
	return (

<>

<div className="col-6 col-md-3 col-image-gallery" style={{backgroundImage: "url(" + mediaURL + ")"}}>
	<a href="#" data-bs-toggle="modal" data-bs-target={'#modal'+blockID} aria-label="modal about [insert subject]"></a>
</div>


<div className="modal fade img-gallery-modal" id={'modal'+blockID} aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-bs-backdrop="static">
	<div className="modal-dialog modal-fullscreen">
		<div className="modal-content">
			<div className="modal-body">
				<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				<div className="row">
					<div className="col-12 col-md-6">
					
					{ title && (
						<RichText.Content tagName="h2" value={title} />
						)}

						<InnerBlocks.Content />
					</div>
					<div className="col-12 col-md-6">
					{ mediaURL && (
						<img className="img-fluid" src={mediaURL} />
						)}
						
					</div> 
				</div> 
			</div> 
		</div> 
	</div>
</div> 


</>
	);
};

export default Save;

