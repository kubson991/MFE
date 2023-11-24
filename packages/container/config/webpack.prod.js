const  {merge} =require('webpack-merge')
const ModuleFederationPlugin =require('webpack/lib/container/ModuleFederationPlugin')
const commoConfig=require('./webpack.common')
const packageJson=require('../package.json')

let domain =process.env.PRODUCTION_DOMAIN

const prodConfig={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:`marketing@${domain}/remoteEntry.js`,
                auth:`auth@${domain}/remoteEntry.js`
            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports=merge(commoConfig,prodConfig)