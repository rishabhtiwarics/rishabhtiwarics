export default {
  title: "Page not found",
  render() {
    return `
      <section class="section not-found">
        <span class="eyebrow">404</span>
        <h1 class="page-title">Page not found</h1>
        <p class="page-lead">The page you're looking for doesn't exist.</p>
        <a href="/" data-link class="btn btn-dark">Back to Home</a>
      </section>
    `;
  },
};
