import fs from 'fs';
import select from './select';

const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');

export default (selectRequestFilePath) => {
  try {
    const selectRequestFile = readFile(selectRequestFilePath);
    const selectRequest = JSON.parse(selectRequestFile);

    const result = select(selectRequest);
    return JSON.stringify(result);
  } catch (error) {
    return JSON.stringify({ error: error.message });
  }
};
