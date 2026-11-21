/*
This script sets Eleventy to use each page's title property,
as set in the frontmatter, as its slug.

This allows users in the CMS to refer to files by title without
knowing the filename.

Without this script, Eleventy would use each file's name,
without file extension, as the slug.
*/
export default {
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
