const  {merge} =require('webpack-merge')
const ModuleFederationPlugin =require('webpack/lib/container/ModuleFederationPlugin')
const commoConfig=require('./webpack.common')
const packageJson=require('../package.json')
const path = require('path');

const prodConfig={
    mode:'production',
    output:{
        filename:'ma.[name].[contenthash].js',
        path: path.resolve(__dirname, '../../../dist'),
        publicPath:'/marketing/'
    },
    plugins:[
        new ModuleFederationPlugin({
                name:`marketing`,
                filename:'maRemoteEntry.js',
                exposes:{
                    './MarketingApp':'./src/bootstrap'
                },
            shared:packageJson.dependencies
        })
    ]
}

module.exports=merge(commoConfig,prodConfig)