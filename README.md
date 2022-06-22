This is a solution to the dish form challenge.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Installation](#installation)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### The challenge

Create a form that will contain the following fields:

- name - dish name (text field)
- preparation_time - preparation time (duration field, would be nice if the input will be formatted like 00:00:00)
- type - dish type (select field with the following options: pizza, soup, sandwich)
- after selecting dish type, conditionally display other fields:
  - for pizza:
    - no_of_slices - # of slices (number field)
    - diameter - diameter (float field)
  - for soup:
    - spiciness_scale - spiciness scale (1-10)
  - for sandwich:
    - slices_of_bread - number of slices of bread required (number field)

All fields should be required (fields depending on the dish type should be required conditionally based on what type of dish is selected).

Data should be submitted via POST request as a JSON to server and the form should support returned validation errors (if any).

### Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Node version: 16.13.0
NPM version: 8.1.0

Simply clone repository and then in the project directory, you can run:

### `npm install`

After shortwhile:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Links

- Live Site URL: [https://karolwk.github.io/ip-address-tracker](https://karolwk.github.io/ip-address-tracker/)

### Built with

- TypeScript
- [React](https://reactjs.org/) - JS library
- [Material UI](https://mui.com)
- [React Final Form](https://final-form.org/react)
