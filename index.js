var spawn = require("child_process").spawn;

module.exports.measure = function(callback, opts) {
	var id = opts ? opts.id || "core" : "core";
	var regex = /volt=([^V]+)/;
	var cmd = spawn("/usr/bin/vcgencmd", ["measure_volts", id]);

	cmd.stdout.on("data", function(buf) {
		callback(null, parseFloat(regex.exec(buf.toString("utf8"))[1]));
	});

	cmd.stderr.on("data", function(buf) {
		callback(new Error(buf.toString("utf8")));
	});
};
