# MeMeory

- This i a website for play memory games with Meme cards hence MeMeory. The idea is that the Memes on the cards should contribute to the enjoyment of the game.

## USER EXPERIENCE
- This is page for anyone who want to keep their memory sharp and who wants to see the latest memes aswell.
The api from imageflip.com provides the most popular memes. Therefore you can train yuor memory and see which memes are trending.

- A memory game is just a basic tool to help train yuor brain to remember patterns.
The api from imageflip provies fresh memes, by picking up the most popular memes from imageflip.com.

- You can check out the wireframe here.
https://www.figma.com/file/574gdpZ7AaPCvkadNU5jZy/Milestone-project-1

## Features
- Two game modes. One with colored cards if you just want to train your memory and get scammed by the near identical colors.
Another features the most popular memes at imageflip.com. So far it is only the pictures.

- Four difficulties ranging from 12 cards to 40.

- A counter to keep track of how many attempts you need to finish the memory games.

- Zoom for the meme cards.

## Features Left to Implement
- Auto generated text for the memecards. This could result in some redicilous memes.
- Two player game mode.
- A proper win screen and effect.
- background music.

## Technologies Used
- HTML 5. Basic framework for website creation. https://en.wikipedia.org/wiki/HTML5
- CSS 3. For styling HTML. https://en.wikipedia.org/wiki/Cascading_Style_Sheets
- Bootstrap. For libriaries making responsive styling easier. https://getbootstrap.com/
- Fontawesome. For icons. https://fontawesome.com/
- Googlefonts. For fonts. https://fonts.google.com/specimen/Exo
- Figma was used for wireframes. It made it simple to create and overview of how everything could look like.
- JavaScript for game functionnality and getting api.
- JQuery
The project uses JQuery to simplify DOM manipulation.

## Testing
- I have had some of my friends try out the memory games. 

- Using the following websites I weeded out erros in my code. I kept my comments as they are even though the html validator warned about the extra hyphens.
https://validator.w3.org/nu/
The css validator claims that my code has 32 errors. All 32 recognised errors are in the Bootstrap library.
https://jigsaw.w3.org/css-validator/

https://andreasholmgaard.github.io/Milestone2memory/

Go to the validator pages and paste in the Milestone2memory website url.

- I have opened the website on my desktop, and my phone to find out if there are any responsiveness problems.
The trickiest part was the landscape orientation for the mobile format.

- The biggest difference between smaller bigger screens is the grid. If the screen becomes too narrow the grid will change to better fit. 
Portrait and landscape of a phone have the grid following the longest side.
The grid takes up more space on mobile, otherwise the pictures would be mush too small.

## Deployment
I deployed using GitHub Pages with the current branch.

There are no differences between the development and the deployment at the moment.

To run the code locally in gitpod type "python3 -m http.server" in the console.

## Credits
Content
copied and modified code from https://github.com/codyseibert/youtube/blob/master/html-memory/index.js.
No text paragraphs were copied.

## Media
- The photos used in this site were obtained from imageflip.com

## Acknowledgements
- Thanks to codyseibert for making a cool tutorial for a memory game in JavaScript.
- https://css-tricks.com/
- https://www.w3schools.com/
- Various memory games and memorygame tutorials.