const  {merge} =require('webpack-merge')
const ModuleFederationPlugin =require('webpack/lib/container/ModuleFederationPlugin')
const commoConfig=require('./webpack.common')
const packageJson=require('../package.json')
const path = require('path');

const prodConfig={
    mode:'production',
    output:{
        filename:'da.[name].[contenthash].js',
        path: path.resolve(__dirname, '../../../dist'),
        // publicPath:'/auth/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
                name:`dashboard`,
                filename:'dashboardRemoteEntry.js',
                exposes:{
                    './DashboardApp':'./src/bootstrap'
                },
            shared:packageJson.dependencies
        })
    ]
}

module.exports=merge(commoConfig,prodConfig)