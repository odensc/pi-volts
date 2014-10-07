pi-volts
==============

Measure the volts on a Raspberry Pi - Node.js module

## Usage
The API is very easy, just do something like this:
```
var volt = require("pi-volts");
volt.measure(function(volts)
{
	console.log("core volts: " + volts);
});
volt.measure(function(volts)
{
	console.log("sdram p volts: " + volts);
}, {id: "sdram_p"});
```

## API
### volts.measure(function callback(volts, err) [, options])
Measures the volts and calls the callback with the parameters volts and error (if any.)

options takes an object with the property "id", which can be one of "core", "sdram_c", "sdram_i" or "sdram_p" (defaults to core.)
