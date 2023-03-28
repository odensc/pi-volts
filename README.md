pi-volts
==============

Measure the volts on a Raspberry Pi.

## Usage
```js
const piVolts = require("pi-volts");

piVolts.measure((err, volts) => {
	if (err) console.error(err);
	else console.log("core volts: " + volts);
});

piVolts.measure((err, volts) => {
	if (err) console.error(err);
	else console.log("sdram_p volts: " + volts);
}, { id: "sdram_p" });
```

## API
### measure(function callback(err, volts) [, options])
Measures the volts and calls the callback with the error and volts.

options takes an object with the property "id", which can be one of "core", "sdram_c", "sdram_i" or "sdram_p" (defaults to core.)
