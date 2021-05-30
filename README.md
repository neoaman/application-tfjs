# React + Django Implementation   
Description: This template is made for user, who will work on react as frontend development and django as backend development.   

## Installations   
- npm v 6.14.13   
- python v3.8.5   
- node  v14.17.0

## Setup Django   
- Create virtual environment and install the required packages   
  - `mkvirtualenv react` To create a virtual environment for react   
  - `workon react` To activate the virtual environment   
  - `pip install -r requirements.txt` Install required packages e.g. django, drf, markdown etc...   
- Start the project   
  - `django-admin startproject <project name> .`   replace `<project name>` name with own project name.   
  - `python manage.py startspp <api>` replace `<api>` with desired name to create a application where we will handel the APIS.   
  - `python manage.py startapp <frontend>` here we will do all js things.   
- Set .env file
  - `SECRET_KEY = 'my|x|secret|x|key|xxxxxxxxx|'` Your Django secret key
  - `DEBUG = 'True'` For production make it False
  - `ALLOWED_HOSTS = '123.456.78.9'` Add your hosted IP
- Set settings.py
  - Import packages and add param through the .env file
    ```py
    import os
    from decouple import config
    SECRET_KEY = config('SECRET_KEY','supersecretkey')
    DEBUG = config('DEBUG',default=False,cast=bool)
    ALLOWED_HOSTS = [config('ALLOWED_HOSTS',default='127.0.0.1')]
    ```   
  - Add corsheader to your project   
    ```py
    INSTALLED_APPS = [
        # Cors Hadder
        'corsheaders',
        # Default
    ...
        # Local Apps
        'api',
        'frontend',
        # External Apps
        'rest_framework',
        # 'rest_framework.authtoken',

        ]
    ```   
  - Add required middleware   
    ```py
    MIDDLEWARE = [
        # CORSHEADERS
        'corsheaders.middleware.CorsMiddleware',
        'django.middleware.common.CommonMiddleware',
    ]
    ```
  - Add allowed sites
    ```py
    CORS_ALLOWED_ORIGIN_REGEXES = [
        r"^https://\w+\.example\.com$",
        r"^http://\w+\.example\.com$",
        ]
    ```
  - Serve Static and Media files
    ```py
    STATIC_URL = '/static/'
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')

    MEDIA_URL = '/media/'
    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

    ```


## Setup React   
- run commands to install required node packahes
  - `npm init -y` inside the directory frontend to initiate node inside frontend.   
  - `npm i webpack webpack-cli webpack-dev-server --save-dev` It will bundel all JS file to one single file.   
  - `npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`   
  - `npm i react react-dom react-router-dom --save-dev` React    
  - `npm i @material-ui/core @material-ui/icons @material-ui/lab --save-dev` Material UI   
  - `npm i @babel/plugin-proposal-class-properties --save-dev` Async and Await   
- Create new file **babel.config.json** inside frontend   
    ```json
    {
        "presets": [
        [
            "@babel/preset-env",
            {
            "targets": {
                "node": "10"
            }
            }
        ],
        "@babel/preset-react"
        ],
        "plugins": ["@babel/plugin-proposal-class-properties"]
    }
    ```   
- Create another file **webpack.config.js**   
    ```js
    const path = require("path");
    const webpack = require("webpack");
    const static_route = "/static/frontend/";

    module.exports = {
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve(__dirname, "./frontend/static/frontend"),
        publicPath: static_route,
        filename: "[name].js",
    },

    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            },
        },
        ],
    },
    optimization: {
        minimize: true,
    },
    devServer: {
        writeToDisk: true,
    },
    };

    ```   
- Modify the **package.json**   
  - modify **script**   
  ```json
  "scripts": {
    "start": "webpack serve --mode development",
    "dev": "webpack --mode development --watch",
    "build": "webpack --mode production && echo yes | python manage.py collectstatic",
    "collect":"python manage.py collectstatic",
    "server":"python manage.py runserver"
  }
  ```   
- Modify **index.html** inside **frontend/templates/frontend/index.html**   
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Neusic</title>

        {% load static %}

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" type="text/css" href="{% static "css/index.css" %}"
        />

    </head>
    <body>
        <div id="main">
        <div id="app"></div>
        </div>

    <script src="{% static "frontend/main.js" %}"></script>
        
    </body>
    </html>
    ```   
- Modify **App.js** which is inside src/components.   
    ```js
    import React, { Component } from "react";
    import { render } from "react-dom";

    export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Testing React Code</h1>
    }
    }

    const appDiv = document.getElementById('app');
    render(<App/>,appDiv);
    ```   
- Modify **index.js**.   
    ```js
    import App from "./components/App";
    ```   
## Rendering The Frontend   
- Modify the [views.py](frontend/views.py) from frontend   
    ```py
    from django.shortcuts import render
    # Create your views here.
    def home(request):
        return render(request,'frontend/index.html')
    ```
- Modify [urls.py](frontend/urls.py) from frontend *(if unavailable create one)   
    ```py
    from django.contrib import admin
    from django.urls import path,re_path
    from .views import home

    app_name = "frontend"
    urlpatterns = [
        re_path(r'^$', home), # Path for the frontend Home page
        re_path(r'^(?:.*)/?$', home), # Path for the frontend Other pages
    ]
    ```   
- Modify [urls.py](control/urls.py) from project folder   
    ```py
    from django.contrib import admin
    from django.urls import path,include,re_path

    from django.conf import settings
    from django.views.static import serve

    urlpatterns = [
        path('admin/', admin.site.urls),
        path("",include('frontend.urls')),

        # Static Files
        re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
        re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    ]
    ```

