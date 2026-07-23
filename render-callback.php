<?php
if ( ! function_exists( 'register_block_type' ) ) {
    return;
}

function render_featured_video_block( $attributes ) {
    // Extract attributes
    $title = $attributes['title'] ?? 'Featured Video';
    $subTitle = $attributes['subTitle'] ?? '';
    $mediaURL = $attributes['mediaURL'] ?? '';
    $link = $attributes['link'] ?? '';
    $linkLabel = $attributes['linkLabel'] ?? '';
    $hasLinkNofollow = $attributes['hasLinkNofollow'] ?? false;
    $openNewTab = $attributes['openNewTab'] ?? false;
    $youtubeEmbed = $attributes['youtubeEmbed'] ?? '';

    $rel = $hasLinkNofollow ? 'no follow ' : '';
    $rel .= 'noopener noreferrer';

    $play_label = $title
        ? sprintf(__('Play video: %s', 'ufl-block'), $title)
        : __('Play video', 'ufl-block');

    ob_start();
    ?>

    <section class="featured-video">
        <div class="container-fluid single-video-container">
            <div class="row align-items-start">
                <?php if ( $mediaURL ) : ?>
                    <a href="https://www.youtube.com/embed/<?php echo esc_attr( $youtubeEmbed ); ?>?autoplay=1&rel=0" class="video-wrapper" role="button" aria-label="<?php echo esc_attr( $play_label ); ?>" data-toggle="lightbox">
                        <div class="video-play" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 109">
                                <g fill="rgba(0,33,165,0.55)" stroke="#fff" stroke-width="2" data-name="Ellipse 145">
                                    <ellipse cx="55" cy="54.5" stroke="none" rx="55" ry="54.5" />
                                    <ellipse cx="55" cy="54.5" fill="none" rx="54" ry="53.5" />
                                </g>
                                <path fill="#fff" d="M75.445 55.49 47 37.99V73Z" data-name="Path 5" />
                            </svg>
                        </div>
                        <img class="img-fluid video-thumb" src="<?php echo esc_url( $mediaURL ); ?>" alt="" aria-hidden="true" />
                    </a>
                <?php else : ?>
                    <a href="https://www.youtube.com/embed/<?php echo esc_attr( $youtubeEmbed ); ?>?autoplay=1&rel=0" class="video-wrapper" role="button" aria-label="<?php echo esc_attr( $play_label ); ?>" data-toggle="lightbox">
                        <div class="video-play" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 109">
                                <g fill="rgba(0,33,165,0.55)" stroke="#fff" stroke-width="2" data-name="Ellipse 145">
                                    <ellipse cx="55" cy="54.5" stroke="none" rx="55" ry="54.5" />
                                    <ellipse cx="55" cy="54.5" fill="none" rx="54" ry="53.5" />
                                </g>
                                <path fill="#fff" d="M75.445 55.49 47 37.99V73Z" data-name="Path 5" />
                            </svg>
                        </div>
                        <img class="img-fluid video-thumb" src="https://i1.ytimg.com/vi/<?php echo esc_attr( $youtubeEmbed ); ?>/0.jpg" alt="" aria-hidden="true" />
                    </a>
                <?php endif; ?>
            </div>
            <div class="featured-video-content-wrapper">
                <div class="col-12">
                    
                    <?php if ( ! empty( $title ) ) : ?>
                        <h2 class="text-white"><?php echo esc_html( $title ); ?></h2>
                    <?php endif; ?>

                    <?php if ( ! empty( $subTitle ) ) : ?>
                        <p class="text-white"><?php echo esc_html( $subTitle ); ?></p>
                    <?php endif; ?>

                </div>
                
                <?php if ( ! empty( $link ) ) : ?>
                    <a
                        href="<?php echo esc_url( $link ); ?>"
                        class="button animated-border-button button-border-orange button-dark-bg"
                        rel="<?php echo esc_attr( $rel ); ?>"
                        target="<?php echo $openNewTab ? '_blank' : '_self'; ?>"
                    >
                        <?php echo esc_html( $linkLabel ); ?>
                    </a>
                <?php endif; ?>

            </div>
        </div>
    </section>
    <?php

    return ob_get_clean();
}