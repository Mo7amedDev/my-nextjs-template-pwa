import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'; 
const nextConfig: NextConfig = {
  /* config options here */
  /* typescript:{
    ignoreBuildErrors:true,
  }, */
  /* experimental: {
    serverActions: {
      bodySizeLimit: '10mb'
    }
  }, */
  /* images: {
    remotePatterns: [
       
      {
        protocol:"https",
        hostname:"res.cloudinary.com",
        
      },
       
    ]
  } */
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig); 
 
