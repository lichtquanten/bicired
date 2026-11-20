import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import markdownItAnchor from "markdown-it-anchor";
import i18n from "eleventy-plugin-i18n";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAnchor));
  eleventyConfig.addPassthroughCopy({ "./src/static/": "/" });
  eleventyConfig.addPlugin(i18n, {
    translations: {
      hello: {
        "en-US": "Hello",
        "es-US": "Hola",
      },
      home: {
        "en-US": "Home",
        "es-US": "Casa",
      },
    },
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
