import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import './table.css';
import { COLUMNS } from './columns';
import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';

export const SortingTable = (props, state) => {
    
    const columns = useMemo(() => COLUMNS, [])
    const data = props.data;

    const defaultColumn = React.useMemo(
      () => ({
        Filter: ColumnFilter
      }),
      []
    )
  
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter
    } = useTable({
        columns,
        data,
        defaultColumn
    },
    useFilters,
    useGlobalFilter, 
    useSortBy
    )

    const { globalFilter } = state

    return (
      <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps() }>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps() }>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps()) }>
                    {column.render('Header')}
                    <div>{column.canFilter ? column.render('Filter') : null} </div>
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? '▼' :'▲') : ''}
                    </span>
                    </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps() }>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps() }>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps() }>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
      </>
    )
}

export default SortingTable;

