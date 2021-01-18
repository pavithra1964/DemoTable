import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'

export const FilteringTable = (props) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = props.data;

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
        defaultColumn
    },
    useFilters, 
    useGlobalFilter)

    const { globalFilter } = state

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        {/*<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />*/}
        <table {...getTableProps()}>
           <thead> 
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                        {column.render('Header')}
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                    </th>
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
        </>
    )
}
export default FilteringTable;