var spawn = require("child_process").spawn;

module.exports.measure = function(callback)
{
	var regex = /temp=([^'C]+)/;
	var cmd = spawn("/opt/vc/bin/vcgencmd", ["measure_temp"]);
	cmd.stdout.on("data", function(buf)
	{
		callback(Number(regex.exec(buf.toString("utf8"))[1]))
	});

	cmd.stderr.on("data", function(buf)
	{
		callback(null, new Error(buf.toString("utf8")));
	});
};