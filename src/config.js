export const config = {
  siteMetadata: {
    title: `React WordPress REST API Demo`,
    description: `Create a single page web app with ReactJS using WordPress as a headless CMS.`,
    author: `@gregrickaby`,
    siteUrl: `https://react-wordpress-api-demo.netlify.app/`,
  },
  options: {
    wordPressUrl: "https://dcstakeholders.coop/wp-json/wp/v2/posts?context=view&order=desc&orderby=date",
  },
};
