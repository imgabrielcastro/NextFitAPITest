import {
  Dialog,
  DialogTitle,
  DialogContent,
  Avatar,
  Typography,
  Box,
  Divider,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAlunoById } from "../../../../services/alunosService";

interface Props {
  open: boolean;
  clienteId: number | null;
  onClose: () => void;
}

export default function ClienteDetailsModal({
  open,
  clienteId,
  onClose,
}: Props) {
  const [cliente, setCliente] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || !clienteId) return;

    const fetchCliente = async () => {
      try {
        setLoading(true);
        const data = await getAlunoById(clienteId);
        setCliente(data);
      } catch (error) {
        console.error("Erro ao buscar cliente:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCliente();
  }, [open, clienteId]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle fontWeight={600}>Detalhes do Cliente</DialogTitle>

      <DialogContent dividers>
        {loading ? (
          <Box display="flex" justifyContent="center" py={5}>
            <CircularProgress />
          </Box>
        ) : cliente ? (
          <Box>
            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <Avatar
                src={cliente?.ClienteParametro?.UrlImagem}
                sx={{ width: 90, height: 90 }}
              />
              <Box>
                <Typography variant="h6">{cliente.Nome}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {cliente.Sexo === 1 ? "Masculino" : "Feminino"}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={4}>
              <Grid>
                <Typography variant="caption">Email</Typography>
                <Typography>{cliente.Email || "-"}</Typography>
              </Grid>

              <Grid>
                <Typography variant="caption">Telefone</Typography>
                <Typography>
                  ({cliente.DddFone}) {cliente.Fone}
                </Typography>
              </Grid>

              <Grid>
                <Typography variant="caption">CPF</Typography>
                <Typography>{cliente.Cpf || "-"}</Typography>
              </Grid>

              <Grid>
                <Typography variant="caption">RG</Typography>
                <Typography>{cliente.Rg || "-"}</Typography>
              </Grid>

              <Grid>
                <Typography variant="caption">Consultor responsável</Typography>
                <Typography>{cliente?.UsuarioConsultor?.Nome}</Typography>
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
