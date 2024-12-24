/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {




  const ALLOWED_BLOCKS = [
    'core/paragraph',
    'core/heading',
    'core/list',
  ];



  const TEMPLATE = [
    ['core/heading', {
      level: 2,
      placeholder: 'Enter header...'
    }],
    ['core/paragraph', {
      placeholder: 'Enter Intro content...',
      className: 'intro'
    }],
    ['core/paragraph', {
      placeholder: 'Enter content...'
    }],
  ];


  return (



    <div className="container">
      <div className="row align-items-start">
        <div className="col-12">
          <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
          />
        </div>
      </div>
    </div>



  );
}