module.exports =  {
    listElement: "ul",            // Change the top level tag
    listItemElement: "li",        // Change the item tag

    listClass: "nav-menu",                // Add a class to the top level
    listItemClass: "nav-item",            // Add a class to every item
    listItemHasChildrenClass: "nav-parent", // Add a class if the item has children
    activeListItemClass: "nav-active",      // Add a class to the current page’s item

    anchorClass: "nav-link",              // Add a class to the anchor
    activeAnchorClass: "",        // Add a class to the current page’s anchor

    // If matched, `activeListItemClass` and `activeAnchorClass` will be added
    activeKey: "",
    // It’s likely you want to pass in `eleventyNavigation.key` here, e.g.:
    // activeKey: eleventyNavigation.key

    // Show excerpts (if they exist in data, read more above)
    showExcerpt: false
  };