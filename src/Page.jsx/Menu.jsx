import React, { useState } from "react";
import Swal from "sweetalert2";
import { FormMenu } from "../components/FormMenu";
import { ListMenu } from "../components/ListMenu";

const Menu = ({ food, addFoodItem, deleteFoodItem, editFoodItem }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [isPriceError, setIsPriceError] = useState(false);

    const addItem = (event) => {
        event.preventDefault();
        const newItem = {
            id: editId || food.length + 1,
            name,
            price,
        };

        if (isEditing) {
            editFoodItem(editId);
            setIsEditing(false);
            setEditId(null);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });
            Toast.fire({
                icon: "success",
                title: "success updated data",
            });
        } else {
            addFoodItem(newItem);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });
            Toast.fire({
                icon: "success",
                title: "success added data",
            });
        }

        setName("");
        setPrice("");
    };

    const editItem = (id) => {
        const itemToEdit = food.find((item) => item.id === id);
        if (itemToEdit) {
            setIsEditing(true);
            setEditId(id);
            setName(itemToEdit.name);
            setPrice(itemToEdit.price);
        }
    };

    const deletePopUP = (id) => {
        Swal.fire({
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFoodItem(id);

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "deleted data success",
                  });
            }
        });
    };

    return (
        <div className="px-10 rounded-xl">
            <FormMenu
                addItem={addItem}
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                isEditing={isEditing}
            />

            <ListMenu
                dataList={food}
                deleteItem={deletePopUP}
                editItem={editItem}
            />
        </div>
    );
};

export default Menu;
