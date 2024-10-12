import React from "react";

export const FormMenu = ({
    addItem,
    name,
    setName,
    price,
    setPrice,
    isEditing,
}) => {
    return (
        <form
            className=" mb-4 justify-start flex gap-2   w-screen rounded-md mt-10"
            onSubmit={addItem}
        >
            <div className="shadow-2xl p-4 rounded-md ">
                <label
                    className="font-bold text-slate-700 text-xl mr-2 mt-10"
                    htmlFor=""
                >
                    Name:
                </label>
                <input
                    autoComplete="off"
                    required
                    name="name"
                    className="h-10 p-4 border-2 border-blue-300 rounded-md"
                    type="text"
                    placeholder="Input your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="shadow-2xl p-4 rounded-md">
                <label
                    className="font-bold text-slate-700 text-xl mr-2 rounded-md "
                    htmlFor=""
                >
                    Price:
                </label>

                <input
                    autoComplete="off"
                    required
                    name="price"
                    className="h-10 p-4 border-2 border-blue-300 rounded-md "
                    type="text"
                    placeholder="Input Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="shadow-2xl p-4 rounded-md">
                <button className="bg-blue-600 px-4 py-2 font-bold hover:bg-blue-700 text-white rounded-md ">
                    {isEditing ? "Update item" : "Add item"}
                </button>
            </div>
        </form>
    );
};
