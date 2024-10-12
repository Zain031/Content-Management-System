import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Page.jsx/Login";
import Menu from "./Page.jsx/Menu";
import Table from "./Page.jsx/Table";
import { Navbar } from "./components/Navbar";
import React, { useState } from "react";
import MyForm from "./components/Coba";


function App() {
    const [food, setFood] = useState([]);
    const [table, setTable] = useState([]);

    const addFoodItem = (newItem) => {
        setFood([...food, newItem]);
    };

    const deleteFoodItem = (id) => {
        setFood(food.filter((item) => item.id !== id));
    };

    const editFoodItem = (id) => {
        const editItem = food.find((item) => item.id === id);
        setTable([...table, editItem]);
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/menu",
            element: (
                <>
                    <Navbar />
                    <Menu
                        food={food}
                        addFoodItem={addFoodItem}
                        deleteFoodItem={deleteFoodItem}
                        editFoodItem={editFoodItem}
                    />
                </>
            ),
        },
        {
            path: "/table",
            element: (
                <>
                    <Navbar />
                    <Table date={table} />
                </>
            ),
        },
        {
            path: "/coba",
            element: <MyForm />
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
