const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const navigationOptions = require('./src/_data/navigationConfig');
const posts = require('./src/_data/posts');
const { DateTime } = require("luxon");
const links = require('./src/_data/links.js');
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const authorData = require("./src/_data/profiles");
const activeProfile = authorData.profiles[authorData.currentPenName];
const books = require(`./src/_data/${activeProfile.bookList}`);
const site = require("./src/_data/site");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    // Add a global data filter or variable for navigation options
    eleventyConfig.addGlobalData("navigationOptions", navigationOptions);
    eleventyConfig.addGlobalData("posts", posts);
    // Select the current author's profile based on `currentPenName`
    //const activeProfile = authorData.profiles[authorData.currentPenName];

    eleventyConfig.addGlobalData("author", activeProfile);
    eleventyConfig.addGlobalData("books", books);

    // Exclude other authors' blog posts
    const excludedPenNames = Object.keys(authorData.profiles).filter(penName => penName !== authorData.currentPenName);
    excludedPenNames.forEach(penName => {
        const blogFolder = authorData.profiles[penName].blogFolder;
        eleventyConfig.ignores.add(`./src/${blogFolder}/**/*`);
    });

    eleventyConfig.addCollection("blog", function (collectionApi) {
        return collectionApi
            .getFilteredByGlob(`src/${activeProfile.blogFolder}/*.md`)
            .map(post => {
                post.data.permalink = `/blog/${post.fileSlug}/`;
                return post;
            });
    });
    eleventyConfig.addCollection("posts", function (collection) {
        return collection.getFilteredByTag("blog").sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
    });

    eleventyConfig.addFilter("permalink", function (slug) {
        return `/blog/${slug}/`;
    });

    // Copy `src/style.css` to `_site/style.css`
    eleventyConfig.addPassthroughCopy(`src/css/${activeProfile.styles}`);

    // Copy the images folder to the output directory
    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addFilter("dateIso", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
    });
    // Add `dateReadable` filter
    eleventyConfig.addFilter("dateReadable", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("MMMM dd, yyyy");
    });

    //eleventyConfig.addFilter("date", (dateObj, format = "yyyy LLL dd") => {
    //  return DateTime.fromJSDate(dateObj).toFormat(format);
    //});

    eleventyConfig.addGlobalData("site", site);

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
            dataTemplateEngine: "njk",
            output: activeProfile.outputFolder  // Change output directory dynamically
        }
        //,
        //// Filter blog posts dynamically
        //collections: {
        //    blog: function (collectionApi) {
        //        return collectionApi.getFilteredByGlob(`src/${activeProfile.blogFolder}/*.md`);
        //    }
        //}
    };
};