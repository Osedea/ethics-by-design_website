const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/pages/404.js"))),
  "component---src-pages-a-propos-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/pages/a-propos.js"))),
  "component---src-pages-billetterie-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/pages/billetterie.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/pages/index.js"))),
  "component---src-pages-intervenants-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/pages/intervenants.js"))),
  "component---src-pages-mentions-legales-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/pages/mentions-legales.js"))),
  "component---src-pages-organisateurs-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/pages/organisateurs.js"))),
  "component---src-pages-programme-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/pages/programme.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/runner/work/ethics-by-design_website/ethics-by-design_website/src/templates/blog-post.js")))
}

