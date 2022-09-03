# NODE-SQ011B-MINI-PROJECT-Group_4

## Project description 
A Note-taking web application that allows users to take quick notes and easily store their notes and thoughts in the cloud. Notes can be taken by typing or transcribing speech to text 

## API Endpoints
**Postman Documentation** [Import link ](https://www.getpostman.com/collections/7fcd4f59afed93c880e0)


**POST** `/api/signin` - login user  
body - (email, password)

**POST** `/api/signup` - register user  
body - (email, username, password)

**PUT** `/api/user` - update signed in user details  
body - (email, username, password, isAdmin)

**DELETE** `/api/user/:id` - delete user   

**GET** `/api/users` - Get all users and their notes count by admin

**GET** `/api/note` - Get all notes of signed in user 

**POST** `/api/note/` - Create new note  
body - (title, content)

**GET** `/api/note/id` - Get note by id  

**PUT** `/api/note/id` - Update note  
body - (title, content)

**DELETE** `/api/note/id` - delete note by id  
## Instructions
**Clone** the project using `git@github.com:decadevs/week-8-mini-project-group_4.git`

**CD** into `week-8-mini-project-group_4` folder

**Run** `yarn` to install dependencies

**Rename** `example.env` to `.env`

**Run** `yarn watch` to start the app with nodemon

## Contribution to the Project
Every feature must be on its own branch. Only send a PR to `develop` when the feature is complete and has no conflict with the `develop` codebase.

use `git checkout -b <name of feature>` to create a new branch and checkout into it. 

Every code passes through `eslint` to make sure it has no error before a `git push` will be successful.

> Forward your questions to the group. Thanks


