const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const navigationOptions = require('./src/_data/navigationConfig');
const { DateTime } = require("luxon");
const links = require('./src/_data/links.js'); 
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");


module.exports = function(eleventyConfig) {
  // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("src/style.css");
  // Copy the images folder to the output directory
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // Add a global data filter or variable for navigation options
  eleventyConfig.addGlobalData("navigationOptions", navigationOptions);

  eleventyConfig.addFilter("dateIso", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });
    // Add `dateReadable` filter
  eleventyConfig.addFilter("dateReadable", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("MMMM dd, yyyy");
  });
    eleventyConfig.addFilter("date", (dateObj, format = "yyyy LLL dd") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

    eleventyConfig.addShortcode("link", function (key) {
    return links[key] || "#"; // Return the link if it exists, or "#" as a fallback
  });
  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};