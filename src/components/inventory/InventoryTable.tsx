import { useMemo } from 'react';
import {
  useReactTable,
  flexRender,
  type ColumnDef,
  type Row,
  type Header,
  type HeaderGroup,
  type Cell,
  type CellContext,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table';
import { useInventoryStore } from '@/store/inventory';
import { Equipment } from '@/types';

const InventoryTable = () => {
  const { equipment, filters } = useInventoryStore();
  const columnHelper = createColumnHelper<Equipment>();

  const columns = useMemo<ColumnDef<Equipment, any>[]>(
    () => [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: (info: CellContext<Equipment, string>) => (
          <div className="font-medium">{info.getValue()}</div>
        )
      }),
      columnHelper.accessor('category', {
        header: 'Category'
      }),
      columnHelper.accessor('serialNumber', {
        header: 'Serial Number'
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info: CellContext<Equipment, string>) => {
          const status = info.getValue();
          const getStatusColor = (status: string) => {
            switch (status) {
              case 'Available':
                return 'bg-green-100 text-green-800';
              case 'In Use':
                return 'bg-blue-100 text-blue-800';
              case 'Under Maintenance':
                return 'bg-yellow-100 text-yellow-800';
              case 'Retired':
                return 'bg-red-100 text-red-800';
              default:
                return 'bg-gray-100 text-gray-800';
            }
          };

          return (
            <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(status)}`}>
              {status}
            </span>
          );
        }
      }),
      columnHelper.accessor('assignedTo', {
        header: 'Assigned To'
      }),
      columnHelper.display({
        id: 'actions',
        header: '',
        cell: () => (
          <div className="flex gap-2">
            <button className="text-blue-600 hover:text-blue-800">Edit</button>
            <button className="text-red-600 hover:text-red-800">Delete</button>
          </div>
        )
      })
    ],
    []
  );

  const table = useReactTable({
    data: equipment,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filters.search,
      columnFilters: [
        { id: 'status', value: filters.status === 'all' ? undefined : filters.status },
        { id: 'category', value: filters.category === 'all' ? undefined : filters.category }
      ]
    }
  });

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<Equipment>) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: Header<Equipment, unknown>) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row: Row<Equipment>) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell: Cell<Equipment, unknown>) => (
                <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable; 