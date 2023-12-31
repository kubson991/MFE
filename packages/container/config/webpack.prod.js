const  {merge} =require('webpack-merge')
const ModuleFederationPlugin =require('webpack/lib/container/ModuleFederationPlugin')
const commoConfig=require('./webpack.common')
const packageJson=require('../package.json')

let domain =process.env.PRODUCTION_DOMAIN

const prodConfig={
    mode:'production',
    output:{
        filename:'co.[name].[contenthash].js',
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:`marketing@${domain}/marketingRemoteEntry.js`,
                auth:`auth@${domain}/authRemoteEntry.js`,
                dashboard:`dashboard@${domain}/dashboardRemoteEntry.js`
            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports=merge(commoConfig,prodConfig)