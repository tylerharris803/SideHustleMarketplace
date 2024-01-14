# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Setup
### Install node v21
### Install Dependencies
1.  `npm install` (in client directory)
2. `cd public/`
3. `npm install` (in client directory)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Convert HTML Page to React (JSX)
Open [this page](https://transform.tools/html-to-jsx) and paste body contents from HTML page (exclude head)
### ExampleComponent.js (was ExampleComponent.html)
```jsx
function ExampleFunction() {
  return (
    <>
      {/* Converted HTML (without body tag) */}
    </>
  );
}

export default ExampleFunction
```
**(Don't do this for index.html!**
