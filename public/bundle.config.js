
/*

By default, these paths are relative to the dorectory this config is in.

Like:
	./css/base.css

If a path starts with '/' it will be relative to the webroot.

*/

var jquery = 'jquery-1.7.1.js',
	jqui = [
		'jquery.ui/jquery.ui.core.js',
		'jquery.ui/jquery.ui.widget.js',
		'jquery.ui/jquery.ui.mouse.js',
		'jquery.ui/jquery.ui.draggable.js',
		'jquery.ui/jquery.ui.droppable.js'
	];

module.exports = {
	//types. By default these coordinate with directory names.
	css: {
		//bundles. Pick any names you want.
		global: [
			'base.css',
			'layout.css',
			'header.css'
			// you can reference other bundles here. See bndlr-advanced.
		],
		//only 1 file? go ahead, be lazy- leave out the array.
		splash: 'splash.css'
	},
	js: {
		jq: jquery,
		jqui: [
			jquery,
			jqui
		],
		global: [
			jquery,
			jqui,
			'core.js'
		],
		splash: 'splash.js'
	},
	html: {
		//Not sure why you would want to bundle html files!
		// ... but if you want to, bndlr is not limited to ANY type
	}
};
