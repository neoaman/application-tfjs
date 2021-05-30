from django.contrib import admin
from django.urls import path,re_path
from .views import home

app_name = "frontend"
urlpatterns = [
    re_path(r'^$', home), # Path for the frontend Home page
    re_path(r'^(?:.*)/?$', home), # Path for the frontend Other pages
]
