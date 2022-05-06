# Getting Started
Start cloning the project and run `npm install`. 


## The context, We want to create a POC (Proof of concept) about second hand car, sold by local company
- 1 First fo all, we want to have a fake dataset for our test... Go on the website *https://www.mockaroo.com/* and prepare your table as on this image <img src='https://github.com/jujuck/Jamstack_GoogleSheet/blob/main/cardataset.png' /> adn export it on CSV. (1000 lines)
- 2 Open a google sheet on your Google Drive. On the *File* menu, click on the import *option* => *Upload* => *Select a file from your device* => select `MOCK_DATA.csv`. Then choose, the *Replace spreadsheet* option and *Import Data*
- 3 Now you can see your full data.
- 4 You should now make it public. In this order, click on the *File* menu and then *Share* => *Publish to the web*. Click on publish with the `Entire Document` and `Comma-separated values(.cvs)` options.
- 5 Memorize the url, we will fetch it. You can test it on a postman. You will see a beautiful CSV dataSet.

## Let's go with our React App
## The goal is now to display a cards for each car opportunities
- 1 In your `App.jsx` file, we will implement a state with the carsData. We will use a request with `fetch` with our brand new url to get the data
- 2 What!!! It doesn't work. Yes, the data we fetch is on the csv format and cannot be parse directly on json... So, in order to correct it, we will execute a serie of action... No worries. No dead End.
    - a On the first `.then` we will parse the data on the *text()* format and not *json()*
    - b On a second `.then`, we will use a external library (*papaparse*) with `npm install papaparse` and import it in your `App.jsx`. On the arrow function, we add `papa.parse(text)`
    - c On a third `.then`, we will `console.log()` the result
- 3 Now, we have an standard json array, but the data is not on a key / value object. It's difficult to use. We will reorganize it with a personnal function.
    - a On the third `.then`, we will call a function `prepareJsonData(data)` and create it above our useEffect.
    - b In it, we will restructure with some algorythms the data with this piece of code.
      ```
      const json = data.map((line, index) => {
        if (index > 0) {
          let obj = {}
          data[0].forEach((el, j) => (obj = { ...obj, [el]: line[j] }))
          return obj;
        }
      })
      json.shift()
      setCars(json) //The state methods
      ```
      - c If everything is correct, you can now `console.log()` your data in your `return` and see a nice array of object.
- 4 Use a `.map()` on this data in your return to display the cars

## Bonus
- 1 Display only the first 100
- 2 Add multiple filter (Location, name, brands...)

## Congratulations
Congrats, you know now how to paly with datastructure and use a google sheet as a source of data.
Keep enjoying !!!


