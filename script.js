  $(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
      
      // Called function to update the name, happiness, and weight of our pet in our HTML
      checkAndUpdatePetInfoInHtml();
    
      // When each button is clicked, it will "call" function for that button (functions are below)
      $('.feed-button').click(clickedFeedButton);
      $('.play-button').click(clickedPlayButton);
      $('.exercise-button').click(clickedExerciseButton);
      $('.talk-button').click(clickedTalkButton);
      $('.pet-button').click(clickedPetButton);
    })
    
      // His name is Lil Bambino, he starts at weight 54 and Happiness(squeaks bpm) 66.
      var pet_info = {name:"Lil Bambino", weight:54, happiness:66, pets: 5};
    
    // feeds the pet, increases it by 4 and gives 4 weight then checks/updates the outcome.
      function clickedFeedButton() {
        pet_info.happiness += 4;
        pet_info.weight += 4;
        $('.talkoption').text("'FOOD. DELICIOUS'");
        checkAndUpdatePetInfoInHtml();
        // visual cue notification requirement, just spits out pre-written sentence anytime u click it
      }
      
    // plays with the pet, happiness goes up by 4, weight goes down by 2, calculates and updates current values.
      function clickedPlayButton() {
        pet_info.happiness += 4;
        pet_info.weight -= 2;
        $('.talkoption').text("'FUN!'");
        checkAndUpdatePetInfoInHtml();
        // visual cue notification requirement, just spits out pre-written sentence anytime u click it
      }
    
    // exercises the pet, lose a happiness and 4 weight, calculate and update the current numbers.
      function clickedExerciseButton() {
        pet_info.happiness -= 1;
        pet_info.weight -= 4;
        $('.talkoption').text("'Hamster Wheel time..yep.'");
        checkAndUpdatePetInfoInHtml();
        // visual cue notification requirement, just spits out pre-written sentence anytime u click it
      }

      function clickedPetButton() {
        pet_info.happiness += 5;
        pet_info.pets += 1;
        $('.talkoption').text("'Yippie!'");
        checkAndUpdatePetInfoInHtml();
        // visual cue notification requirement, just spits out pre-written sentence anytime u click it
      }

    // press this as much as you want to generate 1 of 5 random dialogue i wrote down in index.html
      function clickedTalkButton() {
      // variable for random dialogue, the random-dialogue span is so it can actually take one of the 5 dialogues
        var randomDialogue = $('.random-dialogue span');
        
      // math.random generates a random decimal but never 1 itself, which gets multiplied by the amount of pre-written dialogue, which would be 5 (identified by the .length)
      // math.floor rounds it down to a whole number so it doesn't try to pick a whole number w a decimal, so it's forced to pick 1-5 at random from the
      // pre-written dialogue
        var randomIndex = Math.floor(Math.random() * randomDialogue.length);

      // .eq(randomIndex) selects the dialogue line from randomIndex. starts at 0 for the indexs line.
      // jquery description: reduce the set of matched elements tothe one at the specified index
        var selectedDialogue = randomDialogue.eq(randomIndex);
        
      // index finds the selected lines position within the randomDialogue list
      // jquery description: search for a given element from among matched elements
        var dialogueIndex = randomDialogue.index(selectedDialogue);

      // .text() gets the selected line to display onto the website, 
      // .eq(dialogueIndex) selects one of the 5 dialogue in html <span> list, 
      // so if index is 4, then it displays the 4th line, vice versa for every other value
        $('.talkoption').text(randomDialogue.eq(dialogueIndex).text());
        
        checkAndUpdatePetInfoInHtml();
      }
    
      function checkAndUpdatePetInfoInHtml() {
        checkWeightAndHappinessBeforeUpdating();  
        updatePetInfoInHtml();
    // pet is classified as hungry if the weight is 0
      var petIsHungry = pet_info.weight <= 0;
    // if the weight is 0, nothing else matters, only feed button will work
      $('.play-button, .exercise-button, .talk-button, .pet-button')
        .prop('disabled', petIsHungry);
    // if the pet is actually hungry (weight is less than 0 or is 0) then warning will appear and change image to angry pet
      if (petIsHungry) {
        $('.warning').text("Lil Bambino is HUNGRY, feed him...")
        $('.pet-image').attr('src', 'images/lilbambinoangry.png');
    // otherwise there's no warning and the image will be regular pet.
      } else {
        $('.warning').text("");
        $('.pet-image').attr('src', 'images/lilbambino.png');
      }
    }


      function checkWeightAndHappinessBeforeUpdating() {
    // both if's prevent weight and happiness from entering negatives, forcing it to be 0 or above
        if (pet_info.weight <= 0) {
          pet_info.weight = 0;
          pet_info.happiness = 0;   
        }
        
        if (pet_info.happiness < 0) {
          pet_info.happiness = 0;
        }
    }
      
    // Updates your HTML with the current values in your pet_info object
      function updatePetInfoInHtml() {
        $('.name').text(pet_info['name']);
        $('.weight').text(pet_info['weight']);
        $('.happiness').text(pet_info['happiness']);
        $('.pets').text(pet_info['pets']);
      }