// @flow
import dotenv from 'dotenv';
import getPhoneData from './getPhoneData';
import {PhonesToSearch} from './config';
import writePhonesToCSV from './csw-writer';

/**
 * INITIALIZE
 */
dotenv.config();

async function main(argv: Array<string>): void {

  if (argv.length < 3) {
    throw new Error('File name as a command line argument must be provided.');
  }

  const specs = await getPhoneData(PhonesToSearch, String(process.env.FONOAPI_API_KEY));
  const fileName = argv[2];
  writePhonesToCSV(argv[2], specs);

  console.log(`Wrote processed phone specs to ${fileName}.`);
  console.log(`Preview file by running\n$ cat ${fileName}`);

}

export default main;