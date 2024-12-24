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
			<div className="col-12 col-lg-5 col-faculty-headshot mb-5">
				<div className="position-relative">
					<img
						className="img-fluid faculty-headshot"
						src={mediaURL}
						alt={'Faculty Member ' + name}
					/>
					<div className="faculty-contact-info">
						<p>{name}</p>
						<p>{title}</p>
						<p><a className="faculty-tel" href={"tel:" + phone}>{phone}</a></p>
						<p><a className="faculty-email" href={email}>Send Email</a></p>
					</div>
				</div>
			</div>
		</>

	);
};

export default Save;



