# standalone-backend-with-json-server

Official json-server Homepages:
https://github.com/typicode/json-server
https://www.npmjs.com/package/json-server


## How to deploy standalone-backend-with-json-server on heroku

https://dashboard.heroku.com/apps/standalone-backend-with-json-server/deploy/heroku-git

https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli

npm install -g heroku

heroku --version

heroku git:remote -a standalone-backend-with-json-server

git add . commit -am "make it better" git push heroku main

// WORKS! :) Check in your browser: https://standalone-backend-with-json-server.herokuapp.com


## How to update to new version on heroku

git status 
git add . 
git commit -m "new version" 
git push 
git status

git add . commit -am "make it better" git push heroku main

// WORKS! :) Check in your browser: https://standalone-backend-with-json-server.herokuapp.com


## HOW TO START json-server locally without standalone-backend-with-json-server

You must install json-server GLOBALLY on your computer:

npm install -g json-server

// https://www.npmjs.com/package/json-server#alternative-port
To start json-server you must be in folder where your database is. Then type (you can use any other port instead of 3033):

json-server --watch db.json --port 3033

Then check in your browser, for example: 
http://localhost:3033
http://localhost:3033/posts

