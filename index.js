var spawn = require("child_process").spawn;

module.exports.measure = function(callback, opts)
{
	var id = opts ? opts.id || "core" : "core";
	var regex = /volt=([^V]+)/;
	var cmd = spawn("/opt/vc/bin/vcgencmd", ["measure_volts", id]);
	cmd.stdout.on("data", function(buf)
	{
		callback(Number(regex.exec(buf.toString("utf8"))[1]))
	});

	cmd.stderr.on("data", function(buf)
	{
		callback(null, new Error(buf.toString("utf8")));
	});
};