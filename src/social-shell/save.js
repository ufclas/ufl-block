/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
	const {
		attributes: { title, subTitle },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<section className="social-media-shell">
				<div className="social-media-shell-wrapper">
					<p className="social-media-shell-title">Follow Our College</p>
					<div className="social-feed row">
						<InnerBlocks.Content />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Save;



