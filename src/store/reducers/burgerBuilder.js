
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};


const initialState={
    ingredients:null,
    totalPrice:4,
    error:false
};

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            const updateIngredient={ [action.ingredientName]:state.ingredients[action.ingredientName]+ 1}
            const updateIngredients=updateObject(state.ingredients,updateIngredient)
            const updatedState={
                ingredients:updateIngredients,
                totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName]

            }
           return updateObject(state,updatedState);

         case actionTypes.REMOVE_INGREDIENT:

            const updateIng={ [action.ingredientName]:state.ingredients[action.ingredientName]- 1}
            const updateIngs=updateObject(state.ingredients,updateIng)
            const updatedStates={
                ingredients:updateIngs,
                totalPrice:state.totalPrice - INGREDIENT_PRICES[action.ingredientName]

            }
           return updateObject(state,updatedStates);

         case actionTypes.SET_INGREDIENTS:
             return{
                 ...state,  
                 ingredients:action.ingredients,
                 totalPrice:4,
                 error:false
             };


           case actionTypes.FETCH_INGREDIENTS_FAILED:
               return{
                   ...state,
                   error:true
               };  
         
        default:
            return state; 
    }
    //return state;
};

export default reducer;