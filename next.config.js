module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
