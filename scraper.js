import axios from "axios";
import cheerio from "cheerio";

const url = "https://www.ceneo.pl/";

const response = await axios.get(url);
const $ = cheerio.load(response.data);
const title = $("title").text();
console.log(title);