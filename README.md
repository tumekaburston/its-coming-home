# It's Come Home: a 5-a-side football team generator.
This app was produced to fulfill the brief of the individual technical challenge set at the end of the DevelopMe Fellowship. This is the repository for the front-end of the app. To see the app visit [here](https://tumekab.github.io/tech-challenge/#/).

## Brief
The core of the challenge is to create a tool which randomly picks 5-a-side football teams from a list of 10 names.

## Features

### Team Settings
Here you can add you team names and input your team players.

### Team Selection
Here you can view your randomly selected teams.

### Reshuffle Button
Not keen on your team players? Just hit the reshuffle button and you can have new team mates in no time.

### Reset button
Need to start over? This is covered to, just hit the reset button and it'll take you back to the team settings page where you can input your details from the start.

### Team Scores
Just selecting your teams isn't enough? Well you can easily keep track of your game score with the score card displayed right along your team selections.

### Saving Your Match
Here you can save your match details which get sent to an API for later viewing.

### Match History
Here you can view said previous matches that have been saved to the API.

## Improvements to the App

### Features
- Added ability to delete a player in the player list
- Added ability to delete a match in the Match History page - a delete route is already set up in the API
- Added ability to randomly generate team names from the API
- Added ability to have any number of players be split into even teams

## Version Management
For this project I used Git and GitHub to version manage. 

## To clone this project

-  In your terminal, cd into the directory on your local machine where you would like the project to be saved <br/>
`cd {directory}`

- Clone the repository to your local machine using this command in your terminal </br>
`git clone {git@github.com:Tumekab/football-team-generator.git}`

- Then run npm install to install all the required packages for the project</br>
`npm install`

- Finally run npm start to run the app locally to develop in </br>
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.