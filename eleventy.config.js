import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import markdownItAnchor from "markdown-it-anchor";
import i18n from "eleventy-plugin-i18n";
import translations from "./src/_data/translations.json" with { type: "json" };

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAnchor));
  eleventyConfig.addPassthroughCopy({ "./src/static/": "/" });
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      "*": "en-US",
    },
  });
  eleventyConfig.setServerOptions({
    onRequest: {
      "/": function ({ url }) {
        return {
          status: 302,
          headers: {
            Location: "/en-US",
          },
        };
      },
    },
  });
}

export const config = {
  dir: {
    input: "src/content",
    includes: "../_includes",
    data: "../_data",
    output: "dist",
  },
};
