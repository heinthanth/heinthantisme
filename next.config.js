const{BundleAnalyzerPlugin:BundleAnalyzerPlugin}=require("webpack-bundle-analyzer"),withImages=require("next-images");module.exports=withImages({reactStrictMode:!0,pageExtensions:["tsx"],poweredByHeader:!1,swcMinify:!0,images:{loader:"custom",disableStaticImages:!0},experimental:{esmExternals:!1},webpack:(e,{isServer:a})=>(process.env.ANALYZE&&e.plugins.push(new BundleAnalyzerPlugin({analyzerMode:"server",analyzerPort:a?3081:3082,openAnalyzer:!0})),e)});