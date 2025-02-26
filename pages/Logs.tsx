import { useState } from "react";
import { format } from "date-fns";

interface Log {
  id: number;
  user: string;
  equipment: string;
  action: "Checked Out" | "Returned";
  date: string;
}

const initialLogs: Log[] = [
  { id: 1, user: "Officer John", equipment: "Rifle", action: "Checked Out", date: format(new Date(), "PPpp") },
];

const Logs = () => {
  const [logs, setLogs] = useState(initialLogs);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Equipment Logs</h1>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">User</th>
            <th className="border p-2">Equipment</th>
            <th className="border p-2">Action</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td className="border p-2">{log.user}</td>
              <td className="border p-2">{log.equipment}</td>
              <td className="border p-2">{log.action}</td>
              <td className="border p-2">{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logs;
