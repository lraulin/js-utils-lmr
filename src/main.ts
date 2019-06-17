/** Insert a space before every capital letter preceded by a non-whitespace
 * character. */
const camelSpace = (text: string) => text.replace(/([\S])([A-Z])/g, "$1 $2");

// Capitalize first character in string.
const capitalize = (word: string) => word[0].toUpperCase() + word.slice(1);

// Changes camelCase text to Title Case.
export const camelToTitle = (text: string) =>
  camelSpace(text)
    .split(" ")
    .map(word => capitalize(word))
    .join(" ");

/** Take date object and return string in format MM/DD/YYYY */
export const formatDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${month}/${day}/${year}`;
};
