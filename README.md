# Terra Address Generator

A simple javascript library to generate Terra private mnemonic keys and addresses.
When the Terra blockchain launched, it used the BIP 118 key path (which is the same as Cosmos). In the Summer 2019, this was updated to the BIP 330 path. To use the old path, simple pass in the parameter of m/44'/118'/0'/0/0. The default value is m/44'/330'/0'/0/0, in line with the updated Terra open-source project.

## Usage
```js
const TerraGen = require('terra-address-generator');

var addressInfo = TerraGen.generateAddressAndKey("m/44'/118'/0'/0/0");

```
## Output
```js
{ 
  mnenmonicKey : "razor tattoo reject please like design hidden myth sponsor lazy require thing great mercy render dad peasant alter paper you margin picnic chair crack",
  address: "terra1r3z46gdgtzzjjjweldwsuvdtv8hf2859t5vl0",
  bipPath: "m/44'/118'/0'/0/0"
}
```


## Get The Address From The Mnemonic Key
```js


var addressInfo = TerraGen.createWalletAddress('razor tattoo reject please like design hidden myth sponsor lazy require thing great mercy render dad peasant alter paper you margin picnic chair crack', "m/44'/118'/0'/0/0" )

```
## Output
```js
{ 
  address: "terra1r3z46gdgtzzjjjweldwsuvdtv8hf2859t5vl0",
  'bipPath':"m/44'/118'/0'/0/0"
}
```

