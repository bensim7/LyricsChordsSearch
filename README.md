# LyricsChordsSearch

The goal of Lyrics Chords Search app is to be a 2 in 1 app that allows vocalists who play guitar or vice versa to be able to search up lyrics as well as chords in one app.

# Description

Project ues react functional components to create an app that takes in user's inputs for artist name, song name and Chords and fetches api for song lyrics or chords based on the user input.
Using react router, the song lyrics search, and the chord search are in seperate pages. There is an additional favorites page in the react router that takes in values from the user inputs of the song lyrics search to store the artist and song name in the seperate favorites page using local storage.

# Technologies used

- React (useState, useEffects, Routers, props etc)
- Bootstrap
- Ajax for API
- Local Storage

# Wireframes

- Initial Wireframe sketch of the app pages

![Wireframe1](Wireframe1.jpg)
![Wireframe2](Wireframe2.jpg)
![Wireframe3](Wireframe3.jpg)

# App Function / User Stories

- User is first shown the main introduction page
- User can navigate the page with the navigation bar that links to Lyrics Search, Chords Search, and Favorites.
- User can search lyrics with the app, app brings users to the search result page of the lyrics with song title created from user input and the song lyrics from API
- User can go back to lyrics search page from lyrics results page
- User can search chords with the app and the chord details are displayed in the same page
- User can use the same input boxes used for lyrics search to save their favourite song in a Artist Name - Song Name format.
- Favorites page will store the saved favorites of the user.
- For each search function and the save to favorite function, user is shown validation checks for required fields to be filled.

# Planning and Development Process

- Finalize theme and purpose of the app and find API for the app
- Drew the react components map to plan out the component parent and child structure
- Drew the wireframes of how the interface would look like
- Looked at the components map to determine the links

## Most Recent Map of Components Below

![Map](Map.jpg)

# Problem Solving

This project showed how React Components help to break down the problem solving process into smaller components. It felt that as the states and functions are stored in the upper level in the parent component, instead of having all the variables and functions in one page, it is easiler to see travel across a linked road and from where the data updated and then passed to. States also maintain data upon re-render which enable further use of the passed data such as setting and geting items from local storage.

# APIs Used

1. lyrics.ovh

- Example: https://api.lyrics.ovh/v1/artist/title

2. https://api.uberchord.com/

- Example https://api.uberchord.com/v1/chords/F_maj7
