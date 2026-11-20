import markdownItAnchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAnchor));
}

export const config = {
  dir: {
    input: "src",
    data: "_data",
  },
};
