import React from "react";

export const ListTable = ({ dataList, deleteItem, editeItem }) => {
    return (
        <div className="text-gray-900 bg-gray-200">
            <div className="p-4 flex">
                <h1 className="text-3xl">Table</h1>
            </div>

            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Id</th>
                            <th className="text-left p-3 px-5">Table Number</th>
                            <th className="text-left p-3 px-5">Table Status</th>
                            <th />
                        </tr>

                        {dataList.length > 0 ? (
                            dataList.map((item, index) => (
                                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                    <td className="p-3 px-5">{index + 1}</td>
                                    <td className="p-3 px-5">
                                        {item.tableNumber}
                                    </td>
                                    <td
                                        className={`p-3 px-5 font-bold ${
                                            item.status === "Available"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {item.status}
                                    </td>

                                    <td className="p-3 px-5 flex justify-end">
                                        <button
                                            onClick={() => editeItem(item.id)}
                                            type="button"
                                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => deleteItem(item.id)}
                                            type="button"
                                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <>
                                <tr>
                                    <td className="p-3 px-5">No Data</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
