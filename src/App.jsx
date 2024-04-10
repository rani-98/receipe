
import NavBar from "./Navbar.jsx"
import Header from "./Header.jsx"
import Card from "./Cards.jsx"

import { useEffect, useState } from "react"

/*
what is use effect?
- use effect is a hook that lets you perform side effects in your functional components.
- it is a close replacement for componentsDidmount, componentDidUpdate, and componentWillUnMount.
- it is called after the component has been rendered to the screen.
- it is used to fetch data, add event listeners, and perform other side effects
*/

function fetchRecipes(){
  const url = "http://localhost:5000/recipes"
  data = fetch(url)

  console.log(data);
}
function App() {

  const [recipeType, setRecipeType] = useState("breakfast")
  const [recipes,setRecipes] = useState([])

  
  useEffect(() => {
    //console.log("use effect called")
    //

    const url = "http://localhost:5000/recipes"
    //fetch function used to make a network request
    //fetch is a function  returns a promise, which we need to handle using .then
    // and then function takes a callback function as an arguments
    // the callback function will be called when the promise is resolved with data returned byt the server
    fetch(url).then((response)=>{
      return Response.json()
    })

    .then((data)=>{
      setRecipes(data['recipes'])
    })
  }, [])

  // below effect  will only runs when recipe type changes
  // this useEffect will check recipe type changed or not in every render
  //if recipe type  changed then it will be  run
  // if recipe type not changed then it will not run
  useEffect(() => {
    console.log("recipe type changed")
  }, [recipeType])
  console.log("app component renderd")

  return (
    <>
      <NavBar />
      <Header type={recipeType}  changeRecipe={setRecipeType} />
      {/* <Counter /> */}
      <div className="grid grid-cols-4 gap-20 p-8 h-96">
     {
      // [Card, Card]
        recipes.map((recipe, index) => {
          if (recipeType === recipe.type || recipeType === "all"){
            return <Card key={index} recipe= {recipe}/>
          }
        }) 
     }
      </div>
    </>
  )
}


export default App