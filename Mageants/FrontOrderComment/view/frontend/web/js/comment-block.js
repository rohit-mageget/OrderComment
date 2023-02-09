define(
    [
        'jquery',
        'ko',
        'uiComponent',
    ],
	function ($, ko, Component) {
    'use strict';
    var show_hide_custom_blockConfig = window.checkoutConfig.show_hide_custom_block;
    var notice_message = window.checkoutConfig.notice_message;
		return Component.extend({
			defaults: {
				template: 'Mageants_FrontOrderComment/comment-block'
			},
			canVisibleBlock: show_hide_custom_blockConfig,
			notice_message: notice_message
		});
});
