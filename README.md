
# TFJS with React   
## Copy the Basic Architecture from [React with Django](https://github.com/neoaman/React-with-Django/generate)   
1. Clone the repository   
2. Add a .env file   
   ```
   SECRET_KEY = 'A-random-super-secret-key'
   DEBUG = 'True'
   ```
3. Replaced the project name with my required project name __app-tfjs__   
   1. Find and Replace the project name from [manage.py](manage.py) [wsgi.py](app-tfjs/wsgi.py) [setting.py](app-tfjs/settings.py) [urls.py](app-tfjs/urls.py) [asgi.py](app-tfjs/asgi.py)   
   2. To view where the project name is used use the command `grep -nir control .`   
   3. Replace with the find replace command in your IDE   
4. Replace the directory name from [package.json](package.json) and [package-lock.json](package-lock.json).   

## Install the packages   
1. use `npm i` to install the node packages   
2. use `pip install -r requirements.txt` to install the python packages   

## Install tfjs packages
1.  

