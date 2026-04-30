import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const menuPath = path.join(root, "content", "menu.json");
const raw = await readFile(menuPath, "utf8");
const menu = JSON.parse(raw);

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const validateLink = (link, location) => {
  assert(link && typeof link === "object", `${location} must be an object`);
  assert(typeof link.label === "string" && link.label.trim(), `${location}.label is required`);
  assert(typeof link.url === "string" && link.url.startsWith("/"), `${location}.url must start with /`);
};

assert(Array.isArray(menu), "Menu must be an array");

menu.forEach((item, index) => {
  assert(item && typeof item === "object", `menu[${index}] must be an object`);
  assert(typeof item.label === "string" && item.label.trim(), `menu[${index}].label is required`);

  if (!item.type || item.type === "link") {
    validateLink(item, `menu[${index}]`);
    return;
  }

  if (item.type === "dropdown") {
    assert(Array.isArray(item.links) && item.links.length > 0, `menu[${index}].links must be a non-empty array`);
    item.links.forEach((link, linkIndex) => validateLink(link, `menu[${index}].links[${linkIndex}]`));
    return;
  }

  if (item.type === "mega") {
    assert(Array.isArray(item.columns) && item.columns.length > 0, `menu[${index}].columns must be a non-empty array`);
    item.columns.forEach((column, columnIndex) => {
      assert(typeof column.title === "string" && column.title.trim(), `menu[${index}].columns[${columnIndex}].title is required`);
      assert(Array.isArray(column.links) && column.links.length > 0, `menu[${index}].columns[${columnIndex}].links must be non-empty`);
      column.links.forEach((link, linkIndex) =>
        validateLink(link, `menu[${index}].columns[${columnIndex}].links[${linkIndex}]`)
      );
    });
    return;
  }

  throw new Error(`menu[${index}].type must be link, dropdown, or mega`);
});

console.log(`Menu valid: ${menu.length} top-level items`);
