/*
This script adds values to each page's frontmatter
automatically.

layout: defaults to base.html
> Allows CMS users to create new files without worrying
about adding a layout to the frontmatter.

permalink: defaults to a page's slugified title.
> Allows CMS users to refer to page's by title rather than
filename. By default, Elevently would use filename as a page's
slug.
*/
export default {
  layout({ layout }) {
    if (layout) {
      return layout;
    }
    return "base.html";
  },
  permalink({ permalink, page, title }) {
    if (permalink) {
      return permalink;
    }
    if (!title) {
      return undefined;
    }
    const slug = this.slugify(title);

    const match = page.filePathStem.match("^(\/.+\/)[^\/]+$");
    if (!match?.[1]) {
      return undefined;
    }
    const dir = match[1];

    return `${dir}/${slug}/`;
  },
};
