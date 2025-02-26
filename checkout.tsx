import { useState } from "react";

interface Equipment {
  id: number;
  name: string;
  serial: string;
  status: "Available" | "In Use" | "Under Maintenance";
}

const initialEquipment: Equipment[] = [
  { id: 1, name: "Rifle", serial: "A123", status: "Available" },
  { id: 2, name: "Radio", serial: "B456", status: "In Use" },
];

const CheckOut = () => {
  const [equipment, setEquipment] = useState(initialEquipment);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCheckOut = (id: number) => {
    setEquipment((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "In Use" } : item
      )
    );
  };

  const handleCheckIn = (id: number) => {
    setEquipment((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Available" } : item
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Check-in / Check-out</h1>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Serial</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.serial}</td>
              <td className="border p-2">{item.status}</td>
              <td className="border p-2">
                {item.status === "Available" ? (
                  <button
                    className="bg-green-500 text-white p-2 rounded"
                    onClick={() => handleCheckOut(item.id)}
                  >
                    Check Out
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white p-2 rounded"
                    onClick={() => handleCheckIn(item.id)}
                  >
                    Check In
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckOut;
