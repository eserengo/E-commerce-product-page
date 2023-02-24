export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [quantity, setQuantity] = React.useState(0);
  
    return (
        <Context.Provider value={{ quantity, setQuantity }}>
            {children}
        </Context.Provider>
    );
};
