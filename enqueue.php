<?php

function enqueue_featured_video_block_assets() {
    wp_enqueue_script(
        'create-block-featured-video-block',
        plugins_url( '/build/featured-video/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-editor', 'wp-element', 'wp-i18n', 'wp-block-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . '/build/featured-video/index.js' )
    );

    wp_enqueue_style(
        'create-block-featured-video-block-style',
        plugins_url( '/build/featured-video/style-index.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . '/build/featured-video/style-index.css' )
    );
}
add_action( 'enqueue_block_editor_assets', 'enqueue_featured_video_block_assets' );
add_action( 'enqueue_block_assets', 'enqueue_featured_video_block_assets' );

?>