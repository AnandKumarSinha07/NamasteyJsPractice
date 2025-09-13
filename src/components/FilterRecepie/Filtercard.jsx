
import { addCard } from '../../utils/cardSlice';
import './filter.css';
import { useDispatch } from 'react-redux'

const RecipeCard = ({ recipe }) => {
     const dispatch = useDispatch();
    return (
        <>
            <div className="recipe-card">
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                <h3 className="recipe-title">{recipe.name}</h3>
                <p className="recipe-cuisine">🍴 Cuisine: {recipe.cuisine}</p>
                <p className="recipe-rating">⭐ Rating: {recipe.rating} ({recipe.reviewCount} reviews)</p>
                <button className="add-to-cart-btn"
                 onClick={()=>dispatch(addCard())}
                >Add to Cart</button>
            </div>
        </>
   
  );
};

export default RecipeCard;
