import mdx from '@next/mdx';

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

export default mdx()(nextConfig);
