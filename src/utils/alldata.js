
import { TrekCategory } from './trekcategory';
import { Trek } from './trek';



export const getTrekById = (id) => {
    const result = Trek.filter(trek => trek.id === id);
    return result;
  
};



 export const getTrekCategoryById = (id) => {
     const result = TrekCategory.filter(category => category.id == id);
     console.log("result", result)

    return result;
};


