
import NavBar from "./components/navbar"
import Header from "./components/header"
import Counter from "./components/counter"
import Cards from "./components/cards"
import { useState } from "react"





function App() {
  const [recipeType, setRecipeType] = useState("breakfast")
  const recipes = [
    {
      name:"panner starter",
      username:"sumith veduri",
      time:20,
      servers:2,
      image:"https://cookifi.com/blog/wp-content/uploads/2017/05/paneer-1.jpg",
      type:"breakfast"
    },
    {
      name:"Savory breakfast bowl veg",
      username:"sumith veduri",
      time:15,
      servers:1,
      image:"https://cookifi.com/blog/wp-content/uploads/2017/05/paneer-1.jpg",
      type:"dinner"
    },
    {
      name:"panner starter",
      username:"sumith veduri",
      time:10,
      servers:2,
      image:"https://cookifi.com/blog/wp-content/uploads/2017/05/paneer-1.jpg"
    },
    {
      name:"panner starter",
      username:"sumith veduri",
      time:20,
      servers:2,
      image:"https://cookifi.com/blog/wp-content/uploads/2017/05/paneer-1.jpg"
    },
    {
      name:"Savory breakfast bowl veg",
      username:"karan",
      time:15,
      servers:1,
      image:"https://cookifi.com/blog/wp-content/uploads/2017/05/paneer-1.jpg"
    },
    {
      name:"panner starter",
      username:"puja",
      time:10,
      servers:2,
      image:"https://cookifi.com/blog/wp-content/uploads/2017/05/paneer-1.jpg",
      type:"lunch"
    }
  ]





  return (
    <>
        <NavBar/>
        <Header type = {recipeType} changeRecipe = {setRecipeType}/>
        <div className="grid grid-cols-4 gap-4 p-10">

       {
          recipes.map((recipe,index) => {
            if(recipeType===recipe.type || recipeType==="all")
            return <card key={index} recipe={recipe}/>
          

          })
  
       }

         
        </div>
       {/* <Counter/> */} 
    </>
  )
}
export default App
