import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import markdownItAnchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAnchor));
  eleventyConfig.addPassthroughCopy({ "./src/static/": "/" });
}

export const config = {
  dir: {
    input: "src/content",
    includes: "../_includes",
    data: "../_data",
    output: "dist",
  },
};
