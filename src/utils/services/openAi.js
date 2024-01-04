import OpenAI from "openai";
import { OPENAI_API_KEY } from "../constant";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // This is the default and can be omitted process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default openai;
