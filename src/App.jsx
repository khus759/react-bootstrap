
import {RouterProvider} from 'react-router-dom';
import { DataModeRoutes } from './routes/DataModeRoutes';
import UserProvider from './context/providers/UserProvider';
import WishlistProvider from './context/providers/WishlistProvider';

function App() {
  
  return (
    <>
    <UserProvider>
      <WishlistProvider>

    <RouterProvider router={DataModeRoutes}/>
    </WishlistProvider>

    </UserProvider>
    </>
  )
}

export default App;



 