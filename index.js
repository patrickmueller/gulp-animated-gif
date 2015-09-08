// through2 is a thin wrapper around node transform streams
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-animated-gif';

function prefixStream(prefixText) {
	var stream = through();
	stream.write(prefixText);
	return stream;
}

// Plugin level function(dealing with files)
function gulpAnimatedGif(destFile) {

	if (!destFile) {
		throw new PluginError(PLUGIN_NAME, 'Missing dest-file.');
	}
	prefixText = new Buffer(prefixText); // allocate ahead of time

	// Creating a stream through which each file will pass
	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}
		if (file.isBuffer()) {
			gutil.log('Buffer:' + file.basename);
		}
		if (file.isStream()) {
			gutil.log('Stream:' + file.basename);
		}

		cb(null, file);

	});

}

// Exporting the plugin main function
module.exports = gulpAnimatedGif;