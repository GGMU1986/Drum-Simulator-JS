# Drum-Simulator-JS

  **BACKGROUND**:

The Drum Simulator will allow the user to play drum sounds by pressing keys on the keyboard. Each key (only 8 keys) will correspond to a specific drum or cymbal in a standard drumset. The simulator will have the following pieces to be played by keys:
  1) Snare Drum
  2) Hi-Hat
  3) Open Hi-Hat
  4) Floor Tom
  5) Kick Drum
  6) Crash Cymbal
  7) Ride Cymbal
  8) Cowbell

<img src="https://user-images.githubusercontent.com/8636103/144727610-23570fe9-6704-4c75-96aa-4fb4118a4640.jpeg" width="600" height="400" /><img src="https://user-images.githubusercontent.com/8636103/144727847-96a8b869-c591-4bd4-a468-814acd6bd488.jpg" width="200" height="200" />

  **FUNCTIONALITY & MVPs**:

 With this Drum Simulator, users will be able to:

  - Read through an About modal to explain functionality. 
  - Press keys on keyboard and play drum/cymbal sounds in a free-style mode.
  - Add percussion to preloaded drumless tracks.
  - Play an interactive game, in which, the user will need to remember a pattern of drum sounds and play them back in correct order. (Bonus)
  - Record pieces of music they created to listen to them later. (Bonus)
  - Have Balloons created with each key down that float off in random directions for a visual effect.
  
<!--   In addition, this project will include:
  
   - An ABOUT modal describing how to interact with the simulator.
   - A production README. -->
   
   
   **WIREFRAMES**
   
  <img width="900"  src="https://user-images.githubusercontent.com/8636103/144728495-55bad54f-9c6a-4cb2-aea4-d7ee10eb8814.png">
   
   - Nav Links will include links to this project's Github repo, developer's LinkedIn and the About modal.
   - Other functionality nav bar allows user to click buttons to start playing memory game and record pieces of music.
   - Labelled keys on the bottom of screen inform user which piece of drum set it corresponds to.
   
   
   **TECHNOLOGIES, LIBRARIES, APIs**:
   
   This Project will be implmented with the following technologies:
   
   - The Web Audio API to produce drum/cymbal.
   - Canvas API for animations
   - Freesound API to retrieve specific sounds needed for drumset.
   - Webpack to bundle the source JavaScript code.
   - npm to manage dependencies.
   
   
   
   **IMPLEMENTED TIMEFRAMES**:

  - **Friday Afternoon & Weekend**: Setup project, including getting webpack started. Reasearch Music/Audio APIs and Canvas on how to implement ideas. Start       writing the code to link sounds of drum/cymabls to correspond to pressing the correct keys on keyboard.

  - **Monday**: Finish up writing code for getting keys to make correct sounds and event listeners/handlers for when keys are pressed/unpressed so sounds are       heard correctly. Start styling keys/viewport with CSS.

  - **Tuesday**: Start working with Canvas API to write code to get pixelated character on screen to correspond to correct keys being played. 

  - **Wednesday**: Finish up code and CSS styling for pixelated character. If time permits start working on memory game/recording (bonus) features.

  - **Thursday Morning**: Review code and make small updates as needed. Deploy to GitHub pages.

 
  **BONUS FEATURES**:

  - Memory Game: user will try to re-enter random keys in correct order after hearing them once.

  - Recording feature: user will have the option to record any music played in freestyle mode. 
  
