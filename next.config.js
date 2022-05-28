/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/ios-download",
        destination: "https://apps.apple.com/us/app/liftris/id1625626338",
        permanent: false,
      },
      {
        source: "/android-download",
        destination:
          "https://play.google.com/store/apps/details?id=com.beebles.liftlog",
        permanent: false,
      },
    ];
  },
};
