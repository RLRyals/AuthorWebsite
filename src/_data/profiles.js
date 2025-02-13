module.exports = {
    currentPenName: "Rebecca Ryals", // Change this to switch between pen names

    profiles: {
        "Rebecca Ryals": {
            penName: "Rebecca Ryals",
            realName: "Not Shared", // Optional
            website: "https://RebeccaRyals.com",
            pageTitle: "R L Ryals",
            email: "hello@rebeccaryals.com",
            bio: `Rebecca Ryals, is your go-to author for thrilling Urban Fantasy detective novels. 
            \nThe unique blend of magic and technology will transport you into a world where dragons exist and mysteries abound.
            \nInspired by the likes of The Dresden Files and Altered Carbon, the novels offer a captivating reading experience that will leave you wanting more.
            \nWhether you're a fan of the genre or new to Urban Fantasy, these books are sure to keep you hooked from the first page to the last.
            \nExplore the extraordinary and immerse yourself in a world where the supernatural meets the modern.\n\n`,
            genre: "Urban Fantasy Detective",
            social: {
                twitter: "@rebeccaryals",
                facebook: "https://facebook.com/rebeccaryals"
            },
            outputFolder: "_site_ryals", // Custom output directory
            styles: "ryals.css",
            background: "/images/website_background.jpg",
            blogFolder: "blogs/rebeccaryals",
            bookList: "ryals_books.json"
        },
        "Jane Doe": {
            penName: "Jane Doe",
            realName: "Not Shared", // Optional
            website: "https://janedoeauthor.com",
            email: "reply@janedoeauthor.com",
            bio: "Jane Doe, is your go-to author for thrilling Urban Fantasy detective novels. The unique blend of magic and technology will transport you into a world where dragons exist and mysteries abound. Inspired by the likes of The Dresden Files and Altered Carbon, the novels offer a captivating reading experience that will leave you wanting more. Whether you're a fan of the genre or new to Urban Fantasy, these books are sure to keep you hooked from the first page to the last. Explore the extraordinary and immerse yourself in a world where the supernatural meets the modern.",
            genre: "Urban Fantasy Detective",
            social: {
                twitter: "@janedoeauthor",
                facebook: "https://facebook.com/janedoeauthor"
            },
            outputFolder: "_site_janedoe", // Custom output directory
            styles: "janedoe.css",
            background: "/images/janedoe-bg.jpg",
            blogFolder: "blogs/janedoe"
        },
        "John Smith": {
            penName: "John Smith",
            realName: "Not Shared",
            website: "https://johnsmithbooks.com",
            bio: "John Smith is a bestselling sci-fi author exploring the future of humanity.",
            genre: "Science Fiction, Dystopian",
            social: {
                twitter: "@johnsmithbooks",
                facebook: "https://facebook.com/johnsmithbooks"
            },
            outputFolder: "_site_johnsmith", // Custom output directory
            styles: "johnsmith.css",
            background: "/images/johnsmith-bg.jpg",
            blogFolder: "blogs/johnsmith"
        }
    }
};
