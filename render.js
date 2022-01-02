/* read HTML file(s) */
import fs from "fs"
const nav = fs.readFileSync("./public/nav.html", "utf8")

/* export createPage function */
export function createPage(path, options) {
    return (nav + fs.readFileSync(`./public/${path}`, "utf8"))
    .replace("%%DOCUMENT_TITLE%%", options?.title || "Title")
}