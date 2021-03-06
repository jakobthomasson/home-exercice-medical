import axios from "axios";

async function readTextFile(dataPath: string[]) {
  return axios
    .get<string>(dataPath.join("/"))
    .then((response) => response.data);
}

export default { readTextFile };
