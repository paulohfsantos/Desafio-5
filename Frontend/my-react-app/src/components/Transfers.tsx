import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

export const Transfers = () => {
  const colsData = [
    'dataTransferencia',
    'valor',
    'tipo',
    'nomeOperador'
  ]

  const Columns = colsData.map((col) => {
    return (
      <TableCell key={col} align="center">
        {col}
      </TableCell>
    )
  })

  // const Rows = transfers.map((transfer) => {
  //   return (
  //     <TableRow key={transfer.}>
  //       <TableCell align="center">{transfer.dataTransferencia}</TableCell>
  //       <TableCell align="center">{transfer.valor}</TableCell>
  //       <TableCell align="center">{transfer.tipo}</TableCell>
  //       <TableCell align="center">{transfer.nomeOperador}</TableCell>
  //     </TableRow>
  //   )
  // })
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Columns}
          </TableRow>
        </TableHead>

        <TableBody></TableBody>
      </Table>
    </TableContainer>
  )
}