// @flow
import fs from 'fs';
import csvWriter from 'csv-write-stream';

const getSortedKeys = (object: Object): Array<string> =>
  Object.keys(object).sort();

const writePhonesToCSV = (fileName: string, phones: Array<Object>): void => {
  if (phones.length === 0) {
    throw `Can't write nothing to ${fileName}`; 
  }

  const writer = csvWriter({headers: getSortedKeys(phones[0])});

  writer.pipe(fs.createWriteStream(fileName));
  phones.map((phone) => {
    const row = getSortedKeys(phone).map((key) => phone[key]);
    writer.write(row);
  });
  writer.end();

}

export default writePhonesToCSV;