import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import {
	Button,
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';

const Edit = (props) => {
	const {
		attributes: { date, time, title, subText, slideLink, hasLinkNofollow,openNewTab },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeDate = (newDate) => {
		setAttributes({ date: newDate })
	}

	const onChangeTime = (newTime) => {
		setAttributes({ time: newTime })
	}

	const onChangeSubText = (newsubText) => {
		setAttributes({ subText: newsubText })
	}

	const onChangeLink = (newLink) => {
		setAttributes({ slideLink: newLink })
	}


	const toggleNofollow = () => {
		setAttributes({ hasLinkNofollow: !hasLinkNofollow })
	}
	
	const toggleNewTab = () => {
		setAttributes({ openNewTab: !openNewTab })
	}

	const onLinkClick = (event) => {
		event.preventDefault();
	};

	return (

		<>

			<InspectorControls>
				<PanelBody
					title={__('Event Shell Card', 'event-shell-slide-block')}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Event Day', 'event-shell-slide')}
								value={date}
								onChange={onChangeDate}
								help={__('', 'event-shell-slide')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Event Time', 'event-shell-slide')}
								value={time}
								onChange={onChangeTime}
								help={__('', 'event-shell-slide')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Event Title', 'event-shell-slide')}
								value={title}
								onChange={onChangeTitle}
								help={__('', 'event-shell-slide')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Event Text', 'event-shell-slide')}
								value={subText}
								onChange={onChangeSubText}
								help={__('', 'event-shell-slide')}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Event Destination', 'event-shell-slide')}
								value={slideLink}
								onChange={onChangeLink}
								help={__('', 'event-shell-slide')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Open in New Tab?"
								help={
									openNewTab
										? 'Has rel nofollow.'
										: 'No rel nofollow.'
								}
								checked={openNewTab}
								onChange={toggleNewTab}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>


			<a href={slideLink} 
			onClick={onLinkClick} 
			rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
			target={openNewTab ? "_blank" : "_self"}
			className="upcoming-events-item slick-slide event-link" 
			>
				<div className="inner-txt">

					<RichText
						tagName="p"
						placeholder={__(
							'Write title…',
							'gutenberg-examples'
						)}
						value={date}
						onChange={onChangeDate}
						className='date' />

					<RichText
						tagName="p"
						placeholder={__(
							'Write title…',
							'gutenberg-examples'
						)}
						value={time}
						onChange={onChangeTime}
						className='time' />

					<hr />

					<RichText
						tagName="h3"
						placeholder={__(
							'Write title…',
							'gutenberg-examples'
						)}
						value={title}
						onChange={onChangeTitle}
					/>



					<RichText
						tagName="p"
						placeholder={__(
							'Write title…',
							'gutenberg-examples'
						)}
						value={subText}
						onChange={onChangeSubText}
						className='event-subtext' />


				</div>
			</a>










		</>
	);
};

export default Edit;



