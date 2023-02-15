import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./create-recipe.css";
import { Helmet } from 'react-helmet';

// TODO: will change to .netcore server
//import { addDoc, collection } from "firebase/firestore";
//import { db, auth, storage } from "../firebase-config";
import { v4 } from "uuid";
// TODO: will change to .netcore server
//import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import TopPart from "./top-part";
import MultiSelectDropdown from "./multiselect-dropdown";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TITLE = 'Submit a recipe - FoodShare.com';

function CreateRecipe() {
    const [prepTime, setPrepTime] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [totalTime, setTotalTime] = useState("");
    const [numberOfServings, setNumberOfServings] = useState("");
    const [recipeYield, setRecipeYield] = useState("");
    const [worldCuisine, setWorldCuisine] = useState("Global Recipe");
    const [typesOfRecipe, setTypesOfRecipe] = useState([]);
    const [recipeName, setRecipeName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);
    const [submitRecipe, setSubmitRecipe] = useState("");

    // TODO: will change to .netcore server
    //const recipesCollectionRef = collection(db, "recipes")
    let navigate = useNavigate();

    // TODO: will change to .netcore server
    //const createRecipe = async () => {
    //    await addDoc(recipesCollectionRef, {
    //        prep: prepTime,
    //        cook: cookTime,
    //        total: totalTime,
    //        servings: numberOfServings,
    //        yield: recipeYield,
    //        worldCuisine,
    //        typesOfRecipe,
    //        recipeName,
    //        description,
    //        ingredients,
    //        directions,
    //        submitRecipe,
    //        // author: {}
    //    });
    //    navigate("/personal-recipes");
    //};

    const [recipeImageUpload, setRecipeImageUpload] = useState(null);
    const [url, setURL] = useState("");

    const handleImageChange = (event) => {
        if (event.target.files[0]) {
            setRecipeImageUpload(event.target.files[0]);
        };
        const url = URL.createObjectURL(event.target.files[0]);
        setURL(url);
    }

    const uploadRecipeImage = () => {
        if (recipeImageUpload == null) {
            return;
        };
        // TODO: will change to .netcore server
        //const recipeImageRef = ref(storage, `images/recipes/${recipeImageUpload.name + v4()}`);
        //uploadBytes(recipeImageRef, recipeImageUpload).then(() => {
        //    alert("Image uploaded!");
        //});
        // uploadBytes(recipeImageRef, recipeImageUpload).then((snapshot) => {
        //     getDownloadURL(snapshot.ref).then((url) => {
        //         setURL(url);
        //     })
        // });
    };

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="create-recipe-container">
                <TopPart />
                <form id="create-recipe" action="" name="createRecipe">
                    <div id="create-recipe-left-side-features">
                        {(() => {
                            if (recipeImageUpload == null) {
                                return (
                                    <div id="image-upload-button">
                                        <label for="file-upload" id="custom-file-upload">
                                            <i><FaCamera /></i>
                                            <p id="add-photo">Add a photo</p>
                                            <p>(no smaller than 960 X 960)</p>
                                            <input type="file" id="file-upload" onChange={handleImageChange}></input>
                                        </label>
                                    </div>
                                )
                            } else {
                                return (
                                    <div id="image-upload-button">
                                        <label for="file-upload" id="custom-file-upload">
                                            <input type="file" id="file-upload" onChange={handleImageChange}></input>
                                            <img id="selected-image" src={url} alt="image" />
                                        </label>
                                    </div>
                                )
                            }
                        })()}
                        <div className="create-recipe-left-side-features-flex">
                            <label for="prep-time">Prep time</label><br />
                            <input name="preparationTime" id="prep-time" onChange={(event) => { setPrepTime(event.target.value) }}></input><br />
                            <label for="cook-time">Cook time</label><br />
                            <input name="cookTime" id="cook-time" onChange={(event) => { setCookTime(event.target.value) }}></input><br />
                        </div>
                        <div className="create-recipe-left-side-features-flex">
                            <label for="total-time">Ready in</label><br />
                            <input name="totalTime" id="total-time" onChange={(event) => { setTotalTime(event.target.value) }}></input><br />
                            <label for="number-of-servings">Number of servings</label><br />
                            <input name="numberOfServings" id="number-of-servings" onChange={(event) => { setNumberOfServings(event.target.value) }}></input><br />
                        </div>
                        <div className="create-recipe-left-side-features-flex">
                            <label for="recipe-yield">Recipe yield</label><br />
                            <input placeholder="i.e. 2 rolls / 1 pie / 10 meatballs / etc." name="recipeYield" id="recipe-yield" onChange={(event) => { setRecipeYield(event.target.value) }}></input><br />
                            <label for="world-cuisine">World Cuisine</label><br />
                            <select name="world cuisine" id="world-cuisine" onChange={(event) => { setWorldCuisine(event.target.value) }}>
                                <option value="Chinese Recipe">Chinese Recipe</option>
                                <option value="German Recipe">German Recipe</option>
                                <option value="Indian Recipe">Indian Recipe</option>
                                <option value="Japanese Recipe">Japanese Recipe</option>
                                <option value="Russian Recipe">Russian Recipe</option>
                                <option value="Italian Recipe">Italian Recipe</option>
                                <option value="Spanish Recipe">Spanish Recipe</option>
                                <option value="Global Recipe" selected>Global Recipe</option>
                            </select><br />
                        </div>
                        <label for="type-of-recipe">Types of recipe</label><br />
                        <MultiSelectDropdown onChange={(event) => { setTypesOfRecipe(event.target.value) }} />
                    </div>
                    <div id="create-recipe-right-side-features">
                        <label for="recipe-name">Recipe name</label><br />
                        <input name="recipeName" id="recipe-name" required onChange={(event) => { setRecipeName(event.target.value) }}></input><br />
                        <label for="description">Description</label><br />
                        <textarea name="description" rows="3" cols="80" id="description" required onChange={(event) => { setDescription(event.target.value) }}></textarea><br />
                        <label for="ingredients">Ingredients</label><br />
                        <textarea name="ingredients" rows="5" cols="80" placeholder="Put each ingredient on its own line" id="ingredients" required onChange={(event) => { setIngredients(event.target.value) }}></textarea><br />
                        <label for="directions">Directions</label><br />
                        <textarea name="directions" rows="5" cols="80" placeholder="Put each step on its own line" id="directions" required onChange={(event) => { setDirections(event.target.value) }}></textarea><br />
                        <input name="submitRecipe" value="Private recipe" checked={submitRecipe === "Private recipe"} id="private-recipe" type="radio" onChange={(event) => { setSubmitRecipe(event.target.value) }} />
                        <label for="private-recipe" id="private-recipe-label">Private recipe</label>
                        <p>Only I can see this</p>
                        <input name="submitRecipe" value="Public recipe" checked={submitRecipe === "Public recipe"} id="public-recipe" type="radio" onChange={(event) => { setSubmitRecipe(event.target.value) }} />
                        <label for="public-recipe" id="public-recipe-label">Public recipe</label>
                        <p>Anyone can see this</p>
                    </div>
                </form>
                <div id="create-recipe-bottom-buttons">
                    { /* //TODO: will change to .netcore server */}
                    {/*<button id="create-recipe-save-button" type="submit" form="create-recipe" onClick={() => { uploadRecipeImage(); createRecipe() }}>Save</button>*/}
                    <button id="create-recipe-save-button" type="submit" form="create-recipe" onClick={() => {  }}>Save</button>
                    <a href="/about-me"><button id="create-recipe-cancel-button">Cancel</button></a>
                </div>
            </div>
        </>
    );
};

export default CreateRecipe;