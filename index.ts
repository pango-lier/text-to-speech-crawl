import axios from "axios";
import { URL_CLOUD } from "./type/const";
import { InputData } from "./type/type";
import { writeFile } from "fs/promises";

const textToSpeech = async (
  data: InputData,
  outputPath: string = "example.mp3"
) => {
  const response = await axios.post(URL_CLOUD, data);
  const audioBuffer = Buffer.from(response.data.audioContent, "base64");
  await writeFile(outputPath, audioBuffer);
  console.log(`-- File mp3 is saved at ${outputPath}`);
  return true;
};

export default textToSpeech;
