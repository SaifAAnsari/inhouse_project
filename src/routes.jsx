import Webpage from './component/mainwebpage/body'
import About from './component/about';
import Header from './component/layout/header';
import Footer from './component/layout/footer';

const routes = [
  {
    layout: "mainlayout",
    children: [
      {
        path: '/',
        element: < Webpage/>,
      },
      {
        path:'/about',
        element: <About/>
      }
    ].map(route => ({
      ...route,
      element: <Layout>{route.element}</Layout>, 
    }))
  }
];

export default routes;