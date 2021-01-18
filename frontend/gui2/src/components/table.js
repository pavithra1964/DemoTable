import React, { useMemo } from 'react';
import 'antd/dist/antd.css';
import { useTable } from "react-table";
import './table.css';
import { COLUMNS } from './columns';

export const BascicTable = (props) => {
    const columns = useMemo(() => COLUMNS, [])

    const tableInstance = useTable({
        columns,
        data: props.data,
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}

            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
    )
}

export default BascicTable;

