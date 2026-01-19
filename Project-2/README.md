Nick Pleva
CS1080

Here is a break down of all of the details about my final 
project, based on the rubric given for the project

HTML Structure & Semantics: 
- Correct use of semantic HTML elements (\<header\>, \<section\>, \<nav\>, etc.)
    + Pretty much every page is broken up into 3 sections, being \<header\>, \<section\>, and \<footer\>
    + Inside of each of them I also used <div> for various things that all were within the same field
- Clean and accessible structure- Organized and readable HTML
    + Every page has the same structure, where starting at the top and going down you have the nav bar -> question for challege -> users answer -> submit button -> footer

CSS Styling & Layout:
- Consistent and creative styling
    + All most of the CSS is inside of the file styles.css, along with a few places in the html files with inline CSS
- Use of Flexbox or equivalent layout
    + Pretty much all of the segments of each page used a dark flex block with a blue outline
- Responsive design using media queries
    + The main one is the nav bar, where if you hover over the options the box changes color
 
JavaScript Functionality:
- Includes well-structured JS code using functions, arrays, conditionals, and loops
    + All of the JS files are located in the JS-files folder
    + Mainly the 3 challeges were writen mostly in these files
- Handles DOM manipulation effectively
    + For the math and riddle challege, everytime the user submitted their answer the page changes around using DOM manipulation
- Uses event listeners for interactivity
    + The main usage for event listeners was for any button that submitted forms
 
Form & Validation:
- Includes at least one form
  	+ Pretty much all of the input fields for the challeges are inside of forms
- Validates input with JavaScript
  	+ Inside of the forms in JS there are various checks
    + For example, for the riddles challege the input can't have numbers and must have 3 or more characters
- Prevents default actions and gives clear feedback
  	+ Alerts pop up if something is wrong

Data Handling (JSON/localStorage):
- Uses JSON data (external or hardcoded)
  	+ The riddle challege is the main thing that uses JSON
  	+ All of the riddles and their answers are stored in a JSON file, and then pulls them all into an array that JS can use to select 3 random riddles

Project Completeness
- Covers all major course components
  	+ While making this I made sure to go back to a bunch of the different labs and take bits and pieces from each of them and inputing them into the functionality and visuals of this project
- Combines features meaningfully
	+ Everything came together very nicely and the game has a flow on how it is suppose to run
 	+ The nav bar also fits well above everything

Code Quality & Comments
- Code is clean, organized, and readable
  	+ The code is split up into pieces in order from top to bottom of the screen
  	+ Spaces are input where they are needed
- Includes comments explaining logic
  	+ My comments explain the function of what is happening at different parts and what different JS functions do
- Follows good practices (indentation, naming, structure)
  	+ Most of the variables I used are named based off of what they are holding
 
Creativity & Originality
- Thoughtful design. Unique idea or creative feature integration
  	+ I think the design I choose is pretty clean and easy for the user to view
  	+ My favorite design is the boxes that surround most of the forms and text

User Experience
- Smooth and intuitive navigation
  	+ The game is pretty straight forward on what the user has to do to progress through the game with the buttons and inputs being obvious
  	+ The nav bar is also easy to use
- Clear feedback to user actions
  	+ If the user inputs something invalid an alert will tell them
- No major bugs or visual issues
  	+ After running a bunch of tests I couldn't find any huge bugs, just a few very small visual problems, but nothing that someone would really notice if they didn't fulling make the project themselves

Presentation & Deployment
- Project is hosted on GitHub Pages
  	+ Github Page is running: https://nick-pleva.github.io/WebDev-Quiz-Game/
- GitHub repo includes a complete README.md
  	+ This readme is indeed in the github
- Zipped file submitted to Brightspace (see below)
  	+ Everything is zipped and submitted





