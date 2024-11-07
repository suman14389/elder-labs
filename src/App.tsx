import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import TabsHeader from "./Components/TabsHeader";
import RenderBody from "./Components/RenderBody";

function App() {
  const AppLayout = () => {
    return (
      <div className="bg-black text-white h-screen w-screen">
        <Header />
        <TabsHeader />
        <Outlet />
      </div>
    );
  };

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/:tab",
          element: <RenderBody />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
}

export default App;
