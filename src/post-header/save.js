/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { text, title, btnLabel, btnLink, hasLinkNofollow, openNewTab, mediaID, mediaURL },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>



			<div {...blockProps}>


				{mediaURL ? (

					<section className="single-news-hero w-100" style={{ backgroundImage: "url(" + mediaURL + ")" }} >
						<RichText.Content tagName="h1" value={title} />
					</section>

				) : (

					<section className="title-block w-100">
						<div className="container-fluid news-title-container">
							<div className="title-wrapper">
								<RichText.Content tagName="h1" value={title} />
							</div>
						</div>
					</section>


				)}

			</div>


		</>


	);
};

export default Save;



