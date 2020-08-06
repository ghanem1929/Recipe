import React from 'react';

const Recipe = ({title,calorie,image,ingredients}) => {
    
    return(
        <div>
            <h1>{title}</h1>
            <h3 className="calorie">calories : {calorie}</h3>
            <div className="ing">
            <ul className="ingredient">{ingredients.map(ingredients => (
                <li className="ingredientList">{ingredients.text}</li>
            ))}</ul>
            </div>
            <img src={image} alt=""/>

        </div>
    );
}

export default Recipe;