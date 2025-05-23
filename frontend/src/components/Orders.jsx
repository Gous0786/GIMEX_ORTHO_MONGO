import React from "react";

const UserOrders = () => {
  // Dummy order data
  const orders = [
    {
      id: "ORD001",
      product: "Natural Ortho Powder",
      date: "2025-04-20",
      status: "Pending",
      amount: 249,
    },
    {
      id: "ORD002",
      product: "Organic Hair Oil",
      date: "2025-04-21",
      status: "Shipped",
      amount: 199,
    },
    {
      id: "ORD003",
      product: "Herbal Tea Pack",
      date: "2025-04-22",
      status: "Delivered",
      amount: 349,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-800 border-b border-gray-700">
          <h1 className="text-2xl font-semibold text-white">Order Details</h1>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800">
              <tr className="text-left text-gray-300">
                <th className="px-6 py-3 text-sm font-medium">Order ID</th>
                <th className="px-6 py-3 text-sm font-medium">Product</th>
                <th className="px-6 py-3 text-sm font-medium">Date</th>
                <th className="px-6 py-3 text-sm font-medium">Amount (₹)</th>
                <th className="px-6 py-3 text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{order.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">₹{order.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                        order.status === "Delivered"
                          ? "bg-green-500"
                          : order.status === "Shipped"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-sm text-gray-500">Showing {orders.length} orders</p>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;