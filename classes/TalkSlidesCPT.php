<?php

namespace ToddDukart\TalkSlides;

class TalkSlidesCPT {
	public function init() {
		add_action( 'init', array( $this, 'register_post_type' ) );

	}

	public function register_post_type() {
		$labels = array(
			'name'           => _x( 'Slideshows', 'Post Type General Name', 'talk_slides' ),
			'singular_name'  => _x( 'Slideshow', 'Post Type Singular Name', 'talk_slides' ),
			'menu_name'      => __( 'Slideshows', 'talk_slides' ),
			'name_admin_bar' => __( 'Slideshow', 'talk_slides' ),
		);
		$args   = array(
			'label'               => __( 'Slideshow', 'talk_slides' ),
			'description'         => __( 'Slideshows', 'talk_slides' ),
			'labels'              => $labels,
			'supports'            => array( 'title', ),
			'taxonomies'          => array( 'category', 'post_tag' ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'menu_icon'           => 'dashicons-images-alt2',
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
		);
		register_post_type( 'talk_slides', $args );
	}
}