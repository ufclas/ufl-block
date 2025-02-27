<?php
/**
 * Plugin Name:       Ufl Block
 * Description:       Custom UFL BLocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ufl-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
require_once('render-callback.php');
require_once('enqueue.php');

function create_block_ufl_block_block_init() {
	register_block_type( __DIR__ . '/build/announcements-showcase-block' );
	register_block_type( __DIR__ . '/build/announcement-showcase-button' );
	register_block_type( __DIR__ . '/build/content-carousel-block' );
	register_block_type( __DIR__ . '/build/content-carousel-inner-block' );
	register_block_type( __DIR__ . '/build/cta-buttons-block' );
	register_block_type( __DIR__ . '/build/cta-showcase-block' );
	register_block_type( __DIR__ . '/build/factoids-block' );
	register_block_type( __DIR__ . '/build/factoid-inner' );
	register_block_type( __DIR__ . '/build/hero-block' );
	register_block_type( __DIR__ . '/build/showcase-text-only' );
	register_block_type( __DIR__ . '/build/showcase-text-only-button' );
	register_block_type( __DIR__ . '/build/blockquote' );
	register_block_type( __DIR__ . '/build/title-block' );
	register_block_type( __DIR__ . '/build/fullwidth-text-block' );
	register_block_type( __DIR__ . '/build/showcase-text-image' );
	register_block_type( __DIR__ . '/build/showcase-text-image-inner' );
	register_block_type( __DIR__ . '/build/faculty-listing-carousel' );
	register_block_type( __DIR__ . '/build/faculty-landing' );
	register_block_type( __DIR__ . '/build/faculty-member-landing' );
	register_block_type( __DIR__ . '/build/faculty-listing-carousel-inner' );
	register_block_type( __DIR__ . '/build/faculty-bio' );
	register_block_type( __DIR__ . '/build/faculty-bio-left' );
	register_block_type( __DIR__ . '/build/faculty-bio-right' );
	register_block_type( __DIR__ . '/build/faculty-blockquote' );
	register_block_type( __DIR__ . '/build/card-text-image' );
	register_block_type( __DIR__ . '/build/card-text-image-inner' );
	register_block_type( __DIR__ . '/build/card-text-only' );
	register_block_type( __DIR__ . '/build/card-text-only-inner' );
	register_block_type( __DIR__ . '/build/featured-video', array(
		'render_callback' => 'render_featured_video_block',
	) );
	register_block_type( __DIR__ . '/build/event-shell' );
	register_block_type( __DIR__ . '/build/event-shell-slider' );
	register_block_type( __DIR__ . '/build/event-shell-slide' );
	register_block_type( __DIR__ . '/build/event-shell-button-wrapper' );
	register_block_type( __DIR__ . '/build/event-shell-buttons' );
	register_block_type( __DIR__ . '/build/social-shell' );
	register_block_type( __DIR__ . '/build/social-shell-insta' );
	register_block_type( __DIR__ . '/build/social-shell-twitter' );
	register_block_type( __DIR__ . '/build/accordion-block' );
	register_block_type( __DIR__ . '/build/accordion-block-inner' );
	register_block_type( __DIR__ . '/build/social-buttons' );
	register_block_type( __DIR__ . '/build/social-icon-facebook' );
	register_block_type( __DIR__ . '/build/social-icon-twitter' );
	register_block_type( __DIR__ . '/build/social-icon-instagram' );
	register_block_type( __DIR__ . '/build/social-icon-youtube' );
	register_block_type( __DIR__ . '/build/social-icon-linkedin' );
	register_block_type( __DIR__ . '/build/image-modal' );
	register_block_type( __DIR__ . '/build/image-gallery-slide' );
	register_block_type( __DIR__ . '/build/image-gallery' );
	register_block_type( __DIR__ . '/build/cards-right-rail' );
	register_block_type( __DIR__ . '/build/cards-right-rail-card-wrapper' );
	register_block_type( __DIR__ . '/build/cards-right-rail-cards' );
	register_block_type( __DIR__ . '/build/cards-right-rail-content' );
	register_block_type( __DIR__ . '/build/tab-block' );
	register_block_type( __DIR__ . '/build/tab-block-inner' );
	register_block_type( __DIR__ . '/build/alert' );
	register_block_type( __DIR__ . '/build/alert-button' );
	register_block_type( __DIR__ . '/build/featured-video-multiple' );
	register_block_type( __DIR__ . '/build/featured-video-row' );
	register_block_type( __DIR__ . '/build/featured-video-item' );
	register_block_type( __DIR__ . '/build/featured-video-multiple-vimeo' );
	register_block_type( __DIR__ . '/build/featured-video-row-vimeo' );
	register_block_type( __DIR__ . '/build/featured-video-item-vimeo' );
	register_block_type( __DIR__ . '/build/content-carousel-stack' );
	register_block_type( __DIR__ . '/build/content-carousel-stack-inner' );
	register_block_type( __DIR__ . '/build/featured-cards' );
	register_block_type( __DIR__ . '/build/featured-cards-inner' );
	register_block_type( __DIR__ . '/build/fullwidth-video-img' );
	register_block_type( __DIR__ . '/build/visual-navigation' );
	register_block_type( __DIR__ . '/build/visual-navigation-item' );
	register_block_type( __DIR__ . '/build/blue-centered-cta-button' );
	register_block_type( __DIR__ . '/build/blue-centered-cta' );
	register_block_type( __DIR__ . '/build/title-tool' );
	register_block_type( __DIR__ . '/build/title-tool-column' );


	register_block_type( __DIR__ . '/build/featured-posts' );
	register_block_type( __DIR__ . '/build/featured-post-main' );
	register_block_type( __DIR__ . '/build/featured-post-secondary' );
	register_block_type( __DIR__ . '/build/featured-post-supporting' );

	register_block_type( __DIR__ . '/build/post-header' );
	register_block_type( __DIR__ . '/build/post-footer-block' );
	register_block_type( __DIR__ . '/build/single-post-intro' );

	register_block_type( __DIR__ . '/build/slider-manual' );
	register_block_type( __DIR__ . '/build/slider-manual-inner' );


	register_block_type( __DIR__ . '/build/content-with-related' );
	register_block_type( __DIR__ . '/build/content-with-related-card-wrapper' );
	register_block_type( __DIR__ . '/build/content-with-related-cards' );
	register_block_type( __DIR__ . '/build/content-with-related-content' );



	register_block_type( __DIR__ . '/build/ufl-social-buttons' );
	register_block_type( __DIR__ . '/build/ufl-social-icon-facebook' );
	register_block_type( __DIR__ . '/build/ufl-social-icon-twitter' );
	register_block_type( __DIR__ . '/build/ufl-social-icon-instagram' );
	register_block_type( __DIR__ . '/build/ufl-social-icon-youtube' );
	register_block_type( __DIR__ . '/build/ufl-social-icon-linkedin' );
	register_block_type( __DIR__ . '/build/ufl-social-icon-custom' );

}
add_action( 'init', 'create_block_ufl_block_block_init' );