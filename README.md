### react-github-api

[![Build Status](https://travis-ci.com/OlivierJM/react-github-api.svg?branch=new-branch)](https://travis-ci.com/OlivierJM/react-github-api)

`react-github-api` uses GraphQL with github API to search for a user and show their repositories instantly.  
I used debounce to avoid making too much calls to the GraphQL server each on each onChange on the input field. 

## How to use it  

Just put in your username or any other username you want to look for and it will show you the repositories.  
 [Try it here](http://repo-query.netlify.com) 


# Development 

## requirements 

- Node ˆv6
- npm@latest 


after that clone the repo

`git clone https://github.com/OlivierJM/react-github-api.git`  
`cd react-github-api`

install dependencies

`npm install` or `yarn `

you will need a github token for this to work, generate one for yourself [here](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) 

create a file in the root of the project called `.env` and add your token as follows. 

`REACT_APP_TOKEN="YOURTOKENSHOULDBEHERE1234"` 


## Running 

`npm start` or `yarn start`

# Testing

`npm run test` 

# contribution

Help is needed, kindly check the issues and see which one you can work one, contributors list will be coming here soon. 




# To-do

Check the issues for the coming features and see where you can help.  

