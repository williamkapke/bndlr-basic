/*

Use a file like this to customize bndlr to your needs.

*/


var bndlr = require('bndlr'),
	uglify = require('uglify-js'),
	jsparser = uglify.parser,
	jsprocessor = uglify.uglify,
	cleancss = require('clean-css'),
	env = process.env.NODE_ENV || 'development'
	;

if(env === "development"){
	//got something you only want to happen in dev?

	//watch for changes to the files
	bndlr.StaticFile.watch = true;
}

bndlr.staticDir = 'public';

//bndlr does not dictate what compressor it uses. So you MUST specify them if you want compression!
bndlr.StaticFile.compressors.js = function(content){
	var ast = jsparser.parse(content); // parse code and get the initial AST
	ast = jsprocessor.ast_mangle(ast); // get a new AST with mangled names
	ast = jsprocessor.ast_squeeze(ast); // get an AST with compression optimizations
	var final_code = jsprocessor.gen_code(ast); // compressed code here
	return final_code;
};

bndlr.StaticFile.compressors.css = function(content){
	return cleancss.process(content);
};

module.exports = bndlr;