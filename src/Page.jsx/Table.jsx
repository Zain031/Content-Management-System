import React, { useState } from "react";
import Swal from "sweetalert2";
import { FormTable } from "../components/FormTable";
import { ListTable } from "../components/ListTable";

const Menu = () => {
    const [dataList, setDataList] = useState([]);
    const [tableNumber, setTableNumber] = useState("");
    const [status, setStatus] = useState("");
    const [isEditing, setEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [isForm, setIsForm] = useState(false);

    const addItem = (event) => {
        event.preventDefault();
        if (isEditing) {
            setDataList(
                dataList.map((item) =>
                    item.id === editId ? { ...item, tableNumber, status } : item
                )
            );
            setEditing(false);
            setEditId(null);
        } else {
            const newItem = {
                id: dataList.length + 1,
                tableNumber,
                status,
            };
            setDataList([...dataList, newItem]);
        }
        setTableNumber("");
        setStatus("");
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
            title: `${isEditing ? "Succes update" : "Succes Add"} item`,
        });
    };

    const editeItem = (id) => {
        const editItem = dataList.find((item) => item.id === id);
        setEditing(true);
        setEditId(id);
        setTableNumber(editItem.tableNumber);
        setStatus(editItem.status);
    };

    const deleteItem = (id) => {
        setDataList(dataList.filter((item) => item.id !== id));
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
                deleteItem(id);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };

    return (
        <>
            <div className="px-10 rounded-xl ">
                <FormTable
                    addItem={addItem}
                    tableNumber={tableNumber}
                    setTableNumber={setTableNumber}
                    status={status}
                    setStatus={setStatus}
                    isEditing={isEditing}
                />
                <ListTable
                    dataList={dataList}
                    deleteItem={deletePopUP}
                    editeItem={editeItem}
                    setForm={setIsForm}
                />
            </div>
        </>
    );
};

export default Menu;
