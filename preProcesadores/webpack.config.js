const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry : {
      home: path.resolve(__dirname,'src/js/index.js')      
    },
    mode: 'development',
    output: {
        path : path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
      hot: true,
      open : true,
      port: 4600
    },
    module : {
      rules : [
        {
          test: /\.css$/,
          use :[
            'style-loader',
            {
              loader: 'css-loader',
              options : {
                importLoaders : 1
              }
            },            
            'postcss-loader'
          ]
        },
        {
          test: /\.less$/,
          use :[
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.scss$/,
          use :[
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.styl$/,
          use :[
            'style-loader',
            'css-loader',
            'stylus-loader'
          ]
        },
        {
          test: /\.js$/,
          use : 'babel-loader' ,
          exclude : '/node_modules/'
        },
        {
          test: /\.jpg|png|gif|woff|eot|svg|ttf|mp4|webm$/,
          use :{ 
            loader: 'url-loader',
            options : {
              limit: 90000,
            }
          } ,          
        },
        
        
      ]
    },
    plugins :[
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
       title: 'Webpack dev server urlLoader',
       template : path.resolve(__dirname,'index.html')  
      })
      
    ] 
}