import { slugify, truncate } from "./helpers";

const slug: string = slugify("Hello World");
const short: string = truncate("This is a long text", 10);

console.log(slug);
console.log(short);