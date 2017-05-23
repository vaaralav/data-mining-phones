# data-mining-phones
Using Twitter API and fonoApi to model how phone spec affect opinion about the phone using sentiment analysis and regression.

## Installation

```shell
git clone https://github.com/vaaralav/data-mining-phones.git
cd data-mining-phones
yarn
yarn compile
```
## Executing

Search for phones from [Fono Api](https://fonoapi.freshpixl.com/), parse certain attributes to numeric values from strings and write the results to CSV file.

```shell
node lib output_file_name.csv
```

## Developing

Watch and compile.

```shell
yarn watch
```

The search parameters as `{device: 'device_name', brand: 'brand_name'}` are defined in `src/config.js`. Modify the array to search for different phones.
