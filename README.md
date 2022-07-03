# LyricsChordsSearch

The goal of Lyrics Chords Search app is to be a 2 in 1 app that allows vocalists who play guitar or vice versa to be able to search up lyrics as well as chords in one app.

---

# Description

Project uses react functional components to create an app that takes in user's inputs for artist name, song name and Chords and fetches api for song lyrics or chords based on the user input.
Using react router, the song lyrics search, and the chord search are in seperate pages. There is an additional favorites page in the react router that takes in values from the user inputs of the song lyrics search to store the artist and song name in the seperate favorites page using local storage.

---

# Technologies used

- React (useState, useEffects, Routers, props etc)
- Bootstrap
- Ajax for API
- Local Storage

---

# Wireframes

- Initial Wireframe sketch of the app pages

![Wireframe1](/LyricsChordSearchApp/Wireframe1.jpg)

![Wireframe2](/LyricsChordSearchApp/Wireframe2.jpg)

![Wireframe3](/LyricsChordSearchApp/Wireframe3.jpg)

---

# App Function / User Stories

- User is first shown the main introduction page
- User can navigate the page with the navigation bar that links to Lyrics Search, Chords Search, and Favorites.
- User can search lyrics with the app, app brings users to the search result page of the lyrics with song title created from user input and the song lyrics from API
- User can go back to lyrics search page from lyrics results page
- User can search chords with the app and the chord details are displayed in the same page
- User can use the same input boxes used for lyrics search to save their favourite song in a Artist Name - Song Name format.
- Favorites page will store the saved favorites of the user.
- For each search function and the save to favorite function, user is shown validation checks for required fields to be filled.

---

# Planning and Development Process

- Finalize theme and purpose of the app and find API for the app
- Drew the react components map to plan out the component parent and child structure
- Drew the wireframes of how the interface would look like
- Looked at the components map to determine the links

## Most Recent Map of Components Below

![Map](/LyricsChordSearchApp/Map.jpg)

---

# Problem Solving

1. One of the first challenges encountered was displaying the song title in the search results as API used does not contain the song title. Initially tried to display the search inputs for artist name and song name as the song title but the song title comprising of artist and song name inputs would appear in real time as the search input was keyed. useRef was explored so that the state was either created or updated when the submit search button was pressed. However as this update was within submit function and not globally, calling the states to be displayed outside the submit button function would result in error. A workaround was explored by using useStates to display the artist name and song name search as the song title but putting the search results in a different component and toggling the display of the search form and search displays through a boolean that was changed via clicking on the submit button and the 'Back to Search Page" button.

2. When creating the favorites list, initially the 'favorites' and 'setFavorites' useState and the addToFavorites function was created in Lyrics.js and sent to LyricsForm.js as props.
   A button function in LyricsForm.js then trigged the addToFavorites function in Lyrics.js to store the artist name and song name inputs in the form into 'favorites' in Lyrics.js
   The 'favorites' state was then sent as a prop to Favorites.js to be displayed. However, when sending the favorite state from Lyrics.js to Favorite.js, the component card Favorites needed to be in the 'return' of Lyrics.js, resulting in the Favorites.js page being displayed inside the Lyrics.js page

   A workaround explored was to create a CSS style for a className, named "hideComponent" in index.css with the CSS property 'display: none'. A div with className of hideComponent was then wrapped outside of the component card Favorites that was in the return of Lyrics.js. This enabled Lyrics.js to pass the state 'favorites' into Favorites.js without displaying Favorites.js page while the Lyrics.js page was displayed.

3. Although the 'favorites' state that was set by the addToFavorites function in Lyrics.js could be passed to Favourites.js, as the state was sent to different router page, the 'favorites' state did not keep its data when passed to another page. Local Storage was then explored. With local storage used together with the addToFavorites function, the data in the favorites state could be retrieved by Favorites.js without needing to be passed as a prop. However even though the addToFavorites function within Lyrics.js stores favorites as a array of values, during testing no more than one value (one artist name and song name) could be stored and retrieved through Local Storage, and any additional values would overwrite the previous artist name/song name.

![Favorites](/LyricsChordSearchApp/FavoritesFunction.jpg)

4. The addToFavorites function was then moved into Favorites.js so that the list of favorites array could be created within the Favorites.js, the page displaying the favorites state. However, this meant that the favorites function would need to be passed from Favorties.js into LyricsForm.js, which is the child component of a Sibling component. This resulted in error where the addToFavorites function was not defined which LyricsForm attempted to call the function.

5. A solution was found when moving the addToFavorites function, the favorites and setFavorites useState, and the localStorage set item into App.js, the parent component with the Routes for the react router. This enabled Favorites.js to retrieve more than one item from the local Storage instead of just one artist name and song name at a time.

6. It might be because localStorage.setItem and localStorage.getItem is used in this project to store and retrieve an array instead of JSON , when favorites was retrieved with localStorage.getItem in Favorites.js it comes out as a string with commas. string.split(",") was used to restructure it back into an array and then Array.map was to return the array item of artist name/song name into individual lines.

7. While the storing and retrieving of favorites now worked between router pages, I noticed that when the page was refreshed or when going to another page and returning to the App, the local storage would reset to empty. After a while I realized that whenever the page was refreshed or reentered from another webpage, the useEffect would trigger on favorites state change to autosave to localStorage the inital state of setFavorites which was an empty array. This was resolved with a ternary operator that sets the condition for the initial useState to be 'if there is something in the local storage and it is true the existing item in local storage would be the initial state, if false, the empty array would be the initial state.

![LocalStorage](/LyricsChordSearchApp/LocalStorage.jpg)

8. Later noticed that the string with commas that is first retrieved from localStorage.getItem has an empty space followed by a comma as the first item, so when it was .split(","), the resulting array has a empty first item. The solution explored to use array.shift to remove the first item from the resulting array before using the array.map function. After checking, this issue might have originated from App.js and could be due to a combination of the favorites state being an array and ternary operator being set as initial useState for favorites, which results in an empty array item placed in the initial set for favorites.

- An improved fix may be remove the first empty array with array.shift in App.js before storing the favorites in localStorage. As this may remove the first item in the array if initialState already has something in the localStorage, an 'if' statement may be used to only array.shift if the initialState is an empty array.

This project showed how React Components help to break down the problem solving process into smaller components. As states and functions are stored in the upper level in the parent component, instead of having all the variables and functions in one page, it felt easier to see how data and functions can be shared in a parent-child component map. States also maintain data upon re-render which enabled further use of the passed data such as setting and getting items from localStorage and toggling pages displays.

---

# APIs Used

1. lyrics.ovh

- Example: https://api.lyrics.ovh/v1/artist/title

2. https://api.uberchord.com/

- Example https://api.uberchord.com/v1/chords/F_maj7

---
