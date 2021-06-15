import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';



const StoreContext = createContext();
const { Provider } = StoreContext;



//managing state at a global level and making it available to all other compenents through <Provider> component

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

//creating our own react Hook
//receive [state, dispatch] data StoreProvider manages.
const useStoreContext = () => {
    return useContext(StoreContext);
};


export { StoreProvider, useStoreContext };