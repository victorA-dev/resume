/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    output: 'export',
    basePath: '/resume',
    trailingSlash: true,
    images: { unoptimized: true },
};

module.exports = nextConfig;
