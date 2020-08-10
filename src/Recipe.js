import React from 'react';

const Recipe = ({title,calorie,image,ingredients}) => {
    
    return(
        <div>
            <h1>{title}</h1>
            <h3 className="calorie">calories : {calorie}</h3>
            <div className="ing">
            {/* <ul className="ingredient">{ingredients.map(ingredients => (
                <li className="ingredientList">{ingredients.text}</li>
            ))}</ul> */}


            <ul class="list-group">{ingredients.map(ingredients =>(
            <li class="list-group-item d-flex justify-content-between align-items-center">
                {ingredients.text}</li>))}
            </ul>
            </div>
            <img className="image" src={image} alt=""/>

        </div>
    );
}

export default Recipe;