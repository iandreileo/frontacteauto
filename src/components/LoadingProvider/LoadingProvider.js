import React, {useState, createContext} from 'react';

export const loadingContext = createContext();

export const LoadingProvider = (props) => {
    const [loading, setLoading] = useState(true);
    return (
        <loadingContext.Provider value={[loading, setLoading]}>
            {props.children}
        </loadingContext.Provider>

    );

}

