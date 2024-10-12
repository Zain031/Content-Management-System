import React from "react";

export const FormTable = ({
    addItem,
    tableNumber,
    setTableNumber,
    status,
    setStatus,
    setForm,
}) => {
    return (
        <form
            className="mb-4 flex gap-6 justify-start w-screen rounded-md mt-10"
            onSubmit={addItem}
        >
            <div className="shadow-2xl p-4 rounded-md">
                <label
                    className="font-bold text-slate-700 text-xl mr-2 mt-10"
                    htmlFor="tableNumber"
                >
                    Table Number
                </label>
                <input
                    autoComplete="off"
                    required
                    name="tableNumber"
                    className="h-10 p-4 border-2 border-blue-300 rounded-md"
                    type="text"
                    placeholder="Input your number"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                />
            </div>

            <div className="flex shadow-2xl p-4 rounded-md">
                <label
                    className="font-bold text-slate-700 text-xl mr-2 rounded-md"
                    htmlFor="status"
                >
                    Status
                </label>

                <div className="shadow-2xl rounded-md">
                    <select
                        required
                        className="outline-none focus:outline-none p-2"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Select status</option>
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                    </select>
                </div>
            </div>
            <div className="shadow-2xl p-4 rounded-md">
                <button className="bg-blue-600 px-4 py-2 font-bold hover:bg-blue-700 text-white rounded-md ">
                    Add item
                </button>
            </div>
        </form>
    );
};
