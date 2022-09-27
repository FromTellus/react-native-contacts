# JavaScript React Native - Contact List

## A. Scenario

The Customer Relationship System at your company is an old beast designed to work on Internet Explorer 6. Your sales rep heard that there are people that knows how to build phone applications and swings by you over lunch:

> So, we can do phone applications now? Would it be possible to get our customer data into a phone application? That would simplify our day to day work a lot. Right now I have to bring my computer to even read phone numbers.

## B. What you will be working on today

Today you are going to build an phone application for showing contact information about the customers. In the end of this file there's an array that you can use as data for this application - just store this array in state.

The application only needs two screen - list the contacts and showing the details for each contact.

## C. Testing and linting setup

### Linting

Set up the project to use ESLint with the [Here's](https://github.com/saltsthlm/salt-linting-demo) an instruction repo on how to use linters.

### Testing

This exercise will not focus on writing automated tests for the application.

## D. Lab instructions

* Build a new application from scratch using the blank template from the Expo CLI
* Set up the application to have a contact list screen, that holds the state (the array in the JSON-file).
* Make a details screen that you can navigate to by clicking one of the contacts in the list
* Make sure that it's easy to navigate back to the list again

Extra activities:

* Add a "Comments"-textarea to the details screen and let the user store some more information about the customer. Store that data in the same array as the customers
* Allow the user to snap a photo and store it together with the user data
* Add a map and the possibility to add a needle where the customer lives. No need to look up any adress from an API - just add the needle

---

Good luck and have fun!

### Customer mock data

We have supplied a file called `customers.js` that contains a 20 random customers in an array (generated from [RandomUser](https://randomuser.me/)).

This data can then be imported into your components, as your initial state of the application.
