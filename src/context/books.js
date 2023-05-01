import { createContext, useState } from 'react';

const BooksContext = createContext();
function Provider({ children }) {
  const [count, setCount] = useState(5);

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count * count);
    },
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
