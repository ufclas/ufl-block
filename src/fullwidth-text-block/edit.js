/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
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
    'core/columns', { columns: 1 },
    'core/list',
  ];



  const TEMPLATE = [
    ['core/columns', { 
        columns: 1,
        supports: {color: false}
      },
       [
      ['core/column', {}, [
        ['core/heading', {
          level: 2,
          placeholder: 'Enter header',
          supports: {color:false},
        }],
        ['core/paragraph', {
          placeholder: 'Enter Intro content...',
          className: 'intro'
        }],
        ['core/paragraph', {
          placeholder: 'Enter content...'
        }],
        ['core/freeform'],
      ]],
    ]]
  ];

  return (


    <section className="fullwidth-text-block">
      <div className="container px-0">
        <div className="row align-items-start">
          <div className="col-12">


            <InnerBlocks
              template={TEMPLATE}
            />

          </div>
        </div>
      </div>
    </section>

  );
}