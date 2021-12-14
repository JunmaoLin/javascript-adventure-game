console.log("script is loading");

// select the container of the game description
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

// function that starts the game
function startAdventure() {
  console.log("Adventure has started");
  showAdventureOptions(1);
}

// create a function that shows the description
function showAdventureOptions(textAdventureID) {
  const newDescriptionText = textAdventure.find(gameNode => gameNode.id === textAdventureID);
  descriptionText.innerText = newDescriptionText.description;
  // iterate through the buttons and insert the option text in each button
  for(let i = 0; i < newDescriptionText.options.length; i++) {
    //console.log(newDescriptionText.options[i].buttontext);
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;
  }
}

// function that tracks options and passes the id to the showAdventureOptions function


// optional: function that shows end of the game


// create and object that holds the text for our game and options and also tracks state
const textAdventure = [
  {
    id: 1,
    description: 'This is the adventure of Juan, who got lost in the forest when looking for a bird to photograph. Juan needs your help to find his way out. Choose one of the options below',
    options: [
      {
        buttontext: "Head back to where you came from",
        setState: { headback: true },
        nexttext: 2
      },
      {
        buttontext: "Look up at the sky and head towards the sun",
        nextText: 2       
      }
    ]
  },
  {
    id: 2,
    description: 'great, Juan was able to find his way back, but now he reliazes that its about to rain, what should Juan do now?',
    options: [
      {
        buttontext: "Look for shelter",
        setState: { headback: true },
        nexttext: 3
      },
      {
        buttontext: "Continue heading back, and risk getting lost again",
        nextText: 2       
      }
    ]
  },
  
];

startAdventure();
