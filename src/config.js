export const config = {
  siteMetadata: {
    title: `DC Cooperative Stakeholders`,
    description: `Latest Posts.`,
    author: `@crowdwork`,
    siteUrl: `https://react-wordpress-api-demo.vercel.app/`
  },
  options: {
    wordPressUrl:
      "https://dcstakeholders.coop/wp-json/wp/v2/posts?context=view&order=desc&orderby=date"
  }
};
