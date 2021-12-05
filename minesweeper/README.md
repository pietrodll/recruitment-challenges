# MineSweeper


This is the project I made as a coding take-home assignment for FreshPlanet. It is a simple Minesweeper game in React Native.


## Main features

The application implements the minesweeper game in three difficulty levels, which can be chosen from the home menu. The app also contains a help page which explains how to play.

## Code architecture

To setup the project, I used ``npx react-native init`` with a TypeScript template.

I followed a model-view-controller design pattern.

There are three views:
- Home: landing page of the app, allows to choose the difficulty level or to read the help.
- Game: the page to play the game
- Help: displays a few paragraphs to explain how to play

The models are two classes, ``Grid`` and ``GameGrid`` (extends ``Grid``) which represent the game grid. They contain all the algorithmic part of the app.

There are two controllers in the app. One is a stack navigator, created with the module ``react-navigation``. It controls the display of the pages.

In the game view, the controller is a React hook, ``useGame``, which links the models with the view and handles touch events.

I created reusable components in order to make the app adaptable and the code cleaner. There are four of them:
- ``Button``: a button created from a touchable opacity, to replace the native buttons which are not very adapted to a game
- ``Square``: the squares used in the minesweeper, they can display number or icons depending on the square
- ``Grid``: the game grid, which is only a group of square positioned according to a size
- ``AnimatedPopup``: a popup to display messages when the user wins or loses

All these components are stateless, the only state logic is the the ``Game`` view.

## Testing

For iOS, I tested the app on the iOS simulator (iPhone 11) and on my personal smartphone (iPhone 7).

For Android, I used the Android emulator.

Before building the app, I ran unit tests for the components in order to check errors.
