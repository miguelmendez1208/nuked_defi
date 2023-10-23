/** @type {import('next').NextConfig} */
//const nextConfig = {}

//module.exports = nextConfig

//TODO: change this for secure content policy CSP? 
module.exports = {
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  }