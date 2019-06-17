"use strict";
exports.__esModule = true;
var camelSpace = function (text) { return text.replace(/([\S])([A-Z])/g, "$1 $2"); };
// Capitalize first character in string.
var capitalize = function (word) { return word[0].toUpperCase() + word.slice(1); };
/**Changes camelCase text to Title Case. Fails if cameCase contains more than
 * one capital letter in a row.
 */
exports.camelToTitle = function (text) {
    return camelSpace(text)
        .split(" ")
        .map(function (word) { return capitalize(word); })
        .join(" ");
};
exports.formatDate = function (date) {
    if (date === void 0) { date = new Date(); }
    /** Takes date object and return string in format MM/DD/YYYY */
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    return month + "/" + day + "/" + year;
};
console.log(camelSpace("hello i love you"));
