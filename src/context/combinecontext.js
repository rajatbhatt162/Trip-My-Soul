

import { TourProvider } from "./tourcontext/TourContaxt";
import { UserProvider } from "./usercontext/usercontext";

const CombinedProvider = ({ children }) => {
  return (
    <TourProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </TourProvider>
  );
};

export default CombinedProvider;