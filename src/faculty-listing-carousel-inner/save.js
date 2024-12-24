/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { name, title, email, bioLink, hasLinkNofollow, openNewTab, mediaID, mediaURL, phone },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<>
			<div className="slick-slide faculty-listing-item">
				<a href={bioLink} rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"} target={openNewTab ? "_blank" : "_self"} className="faculty-listing-img" >
					<img
						className="img-fluid faculty-image"
						src={mediaURL}
						alt={'Faculty Member ' + name}
					/>
				</a>
				<div className="faculty-listing-bio">
					<p><strong>{name}</strong></p>

					{title && (

						<p>{title}</p>

					)}

					{phone && (

						<a className="faculty-tel" href={"tel:" + phone}>{phone}</a>

					)}

					{email && (

						<a className="faculty-email" href={"mailto:" + email} >Send Email</a>

					)}

					{bioLink && (

						<a href={bioLink} rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"} target={openNewTab ? "_blank" : "_self"} >See Bio</a>

					)}


				</div>
			</div>

		</>


	);
};

export default Save;



