import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Avatar,
  TablePagination,
} from "@mui/material";
import { getAlunos } from "../../../../services/alunosService";
import { useState, useEffect } from "react";
import { calcularIdade } from "../../../../utils/date";
import ClienteDetailsModal from "../ClienteDetailsModal";

export default function TableClients() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedClienteId, setSelectedClienteId] = useState<number | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getAlunos(0, 1000).then((data) => {
      setClientes(data.Content);
    });
  }, []);

  const clientesPaginados = clientes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <Paper sx={{ py: 2 }}>
      <Box sx={{ maxHeight: 720, overflowY: "auto" }}>
        <Table size="small" stickyHeader>
          <TableHead
            sx={{
              "& .MuiTableCell-root": {
                backgroundColor: "secondary.main",
              },
              tableLayout: "fixed",
              width: "100%",
            }}
          >
            <TableRow key={clientes[0]?.Id} hover sx={{ cursor: "pointer" }}>
              <TableCell sx={{ minWidth: 300 }}>Nome</TableCell>
              <TableCell sx={{ minWidth: 150 }}>Idade</TableCell>
              <TableCell sx={{ minWidth: 150 }}>Sexo</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {clientes.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center" sx={{padding: 4}}>
                  Nenhum cliente encontrado
                </TableCell>
              </TableRow>
            )}
            {clientesPaginados.map((cliente) => (
              <TableRow
                key={cliente.Id}
                hover
                onClick={() => {
                  setSelectedClienteId(cliente.Id);
                  setModalOpen(true);
                }}
              >
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                      src={cliente.ClienteParametro?.UrlImagem}
                      alt={cliente.Nome}
                    />
                    {cliente.Nome}
                  </Box>
                </TableCell>

                <TableCell>
                  {calcularIdade(cliente.DataNascimento)} anos
                </TableCell>

                <TableCell>
                  {cliente.Sexo === 1 ? "Masculino" : "Feminino"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <TablePagination
        component="div"
        count={clientes.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[10, 25]}
        labelRowsPerPage="Exibir"
      />
      <ClienteDetailsModal
        open={modalOpen}
        clienteId={selectedClienteId}
        onClose={() => {
          setModalOpen(false);
          setSelectedClienteId(null);
        }}
      />
    </Paper>
  );
}
