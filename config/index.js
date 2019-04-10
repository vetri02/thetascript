module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Thetascript Blog', // Navigation and Site Title
  siteTitleAlt: 'Thetascript Blog - Javascript and more', // Alternative Site title for SEO
  siteTitleManifest: 'ThetascriptBlog',
  siteUrl: 'https://thetascript.netlify.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Blog on javascript, html and css, developing awesome web apps/PWA', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Blog on javascript, html and css, developing awesome web apps/PWA', // Your site description
  author: 'Vetrichelvan', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@thetascript', // Twitter Username - Optional
  ogSiteName: '', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
