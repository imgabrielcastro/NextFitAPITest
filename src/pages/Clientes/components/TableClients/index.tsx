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
  Skeleton,
} from "@mui/material";
import { getAlunos } from "../../../../services/alunosService";
import { useState, useEffect } from "react";
import { calcularIdade } from "../../../../utils/date";
import ClienteDetailsModal from "../ClienteDetailsModal";

export default function TableClients() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedClienteId, setSelectedClienteId] = useState<number | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    getAlunos(0, 1000).then((data) => {
      setClientes(data.Content ?? []);
      setLoading(false);
    });
  }, []);

  const clientesPaginados = clientes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <Paper sx={{ py: 2 }}>
      <Box
        sx={{
          maxHeight: 720,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Table size="small" stickyHeader>
          <TableHead
            sx={{
              "& .MuiTableCell-root": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            <TableRow>
              <TableCell sx={{ minWidth: 300 }}>Nome</TableCell>
              <TableCell sx={{ minWidth: 150 }}>Idade</TableCell>
              <TableCell sx={{ minWidth: 150 }}>Sexo</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loading &&
              Array.from({ length: rowsPerPage }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Skeleton variant="circular" width={32} height={32} />
                      <Skeleton width="60%" height={20} />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Skeleton width={40} height={20} />
                  </TableCell>
                  <TableCell>
                    <Skeleton width={60} height={20} />
                  </TableCell>
                </TableRow>
              ))}

            {!loading && clientes.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center" sx={{ py: 4 }}>
                  Nenhum cliente encontrado
                </TableCell>
              </TableRow>
            )}

            {!loading &&
              clientesPaginados.map((cliente) => (
                <TableRow
                  key={cliente.Id}
                  hover
                  sx={{ cursor: "pointer" }}
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

      {!loading && (
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
      )}

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
