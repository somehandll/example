var dest = 'public';
var src = 'build';

module.exports = {

	sass: {
		paths: src + '/sass/main.scss',
		options: {
			sourcemap: true,
			style: 'compact'
		}
	},

	html: {
		index: src + '/build.html',
		templates: src + '/tpl/**.html',
		options: {
			prefix: '__',
			basepath: src + '/tpl'
		}
	},

	images: {
		src: src + '/img/*.jpg',
		dst: dest + '/img'
	}
};
