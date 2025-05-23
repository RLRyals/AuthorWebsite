# AuthorWebsite

## Managing Multiple Author Profiles

This website supports multiple pen names (author profiles). Each profile has its own settings, blog folder, and output directory.

### How to Add or Update a Pen Name

1. Open `src/_data/profiles.js`.
2. In the `profiles` object, add or update an entry for your pen name. Example:

```js
"Jane Doe": {
    penName: "Jane Doe",
    realName: "Not Shared",
    website: "https://janedoeauthor.com",
    email: "reply@janedoeauthor.com",
    bio: "Jane Doe is an author...",
    genre: "Urban Fantasy Detective",
    social: {
        twitter: "@janedoeauthor",
        facebook: "https://facebook.com/janedoeauthor"
    },
    outputFolder: "_site_janedoe", // Output directory for this pen name
    styles: "janedoe.css",         // CSS file for this pen name
    background: "/images/janedoe-bg.jpg",
    blogFolder: "blogs/janedoe"    // Blog folder for this pen name
}
```

3. To switch the active pen name, change the value of `currentPenName` at the top of the file:

```js
currentPenName: "Jane Doe",
```

### How to Build the Website for a Pen Name

1. Set the desired pen name as `currentPenName` in `src/_data/profiles.js`.
2. Run the build command:

```
npm run build
```

- The output will be placed in the folder specified by the `outputFolder` property for that pen name.

### How to Serve the Website Locally

```
npm start
```

- This will start a local server for the currently selected pen name.

---

For more details, see the comments in `src/_data/profiles.js` and `.eleventy.js`.