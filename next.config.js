/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**.erxes.io",
      },
      {
        protocol: "https",
        hostname: "erxes.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://dts.app.erxes.io/api",
    NEXT_PUBLIC_WS_DOMAIN: "ws://localhost:4000/graphql/",
    NEXT_PUBLIC_POS_TOKEN: "zaKjxT9DrRMZHTgvh7S0qBpoUBGbfANp",
    NEXT_PUBLIC_CP_ID: "HP_vyKArvT8NBIKYzQmxC",
    NEXT_PUBLIC_FACEBOOK_ID: "477832793072863",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6ImVjb21tZXJjZS11c2UiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTAxVDAyOjMyOjEyLjM3NFoiLCJ1c2VyR3JvdXBJZCI6Il9idEx0UzEtekh2SFM5dm9qYzZoTSIsImV4cGlyZURhdGUiOiIyMDI1LTA1LTAxVDA4OjQxOjQyLjg3MloiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiJLdnlGbGJPblVTVTJnU2JoZ0FCV0MiLCJfX3YiOjB9LCJpYXQiOjE3NDM0OTY5MzJ9.8-c_7_42PyLl9y3NGFDh6L5H8wDyDxkLMD4xI0WPtJo",
  },
};

module.exports = nextConfig;
