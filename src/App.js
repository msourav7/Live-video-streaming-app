import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Body from './components/Body';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import store from './utils/store';

const appRouter=  createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[ // all these children will go where my outlet is,which is in our body comp.
    {
       path:'/',
       element:<MainContainer/>
    },
    {
      path:'watch',
      element:<WatchPage/>
   }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="">
     
     <Head/>
     <RouterProvider router={appRouter}/>
     
    </div>
    </Provider>
  );
}

export default App;
