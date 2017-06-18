pi-volts
==============

Measure the volts of a Raspberry Pi.

## Usage
```js
var volt = require("pi-volts");

volt.measure(function(volts) {
	console.log("core volts: " + volts);
});

volt.measure(function(volts) {
	console.log("sdram_p volts: " + volts);
}, {id: "sdram_p"});
```

## API
### volts.measure(function callback(err, volts) [, options])
Measures the volts and calls the callback with the error and volts.

options takes an object with the property "id", which can be one of "core", "sdram_c", "sdram_i" or "sdram_p" (defaults to core.)
