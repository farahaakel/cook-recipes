import React, { Component } from "react";
import pizza from "../images/pizza1.png";
import burger from "../images/burger.webp";
import Spaghetti from "../images/noodle.jpg";
import Recipe from "./Recipe";
import Navigation from "./Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: "Burger",
          author: "Chef Joy",
          ingredients: ["Meat", "Cream cheese", "Tomato", "Burger Bread"],
          steps: [
            "Cook Meet",
            "Put cheese and tomato on it",
            "Cooking",
            "Then enjoy the taste!",
          ],
          src: burger,

          id: "burger",
        },
        {
          title: "Pizza",
          author: "Chef Amira",
          ingredients: ["Pizza Crust", "Pizza Sauce", "Mozerella Cheese"],
          steps: [
            "Put sauce on crust",
            "Sprinkle mozarella cheese over sauce",
            "Bake for 20 minutes",
            "Then enjoy the taste!",
          ],
          src: pizza,
          id: "pizza",
        },
        {
          title: "Spaghetti",
          author: "Chef Farah",
          ingredients: ["Spaghetti", "Pizza Sauce", "Spaghetti Cheese"],
          steps: [
            "Put sauce on Spaghetti",
            "Sprinkle mozarella cheese over sauce",
            "Bake for 20 minutes",
            "Then enjoy the taste!",
          ],
          src: Spaghetti,
          id: "spaghetti",
        },
      ],
      selectedRecipe: null,
    };
  }

  selectNewRecipe(recipeId) {
    if (recipeId) {
      this.setState({
        ...this.state,
        selectedRecipe: recipeId,
      });
    }
  }

  render() {
    let recipeToSelect;
    if (this.state.selectedRecipe) {
      const filteredRecipes = this.state.recipes.filter(
        (recipe) => recipe.id === this.state.selectedRecipe
      );
      if (filteredRecipes.length > 0) {
        recipeToSelect = filteredRecipes[0];
      }
    }
    return (
      <div className="App">
        <aside className="sidebar">
          <h1 className="sidebar__title">Recipe Book</h1>
          <Navigation
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
        </aside>
        {recipeToSelect ? (
          <Recipe
            ingredients={recipeToSelect.ingredients}
            steps={recipeToSelect.steps}
            title={recipeToSelect.title}
            src={recipeToSelect.src}
            author={recipeToSelect.author}
          />
        ) : null}
      </div>
    );
  }

  componentDidMount() {
    const recipeToShow = this.state.recipes[0].id || null;
    this.setState({
      ...this.state,
      selectedRecipe: recipeToShow,
    });
  }
}

export default App;
