import { createContext, useState } from 'react';

const CreateEventContext = createContext();

export default CreateEventContext;

export const CreateEventProvider = ({ children }) => {
  const [toast, setToast] = useState(false);
  let contextData = {
    Toast: toast,
    setToast: setToast,
  };

  return (
    <CreateEventContext.Provider value={contextData}>
      {children}
    </CreateEventContext.Provider>
  );
};
