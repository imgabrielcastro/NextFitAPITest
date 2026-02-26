import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { cadastrarCliente } from "../../../../services/alunosService";

const schema = yup.object({
  Nome: yup.string().required("Nome é obrigatório"),
  Email: yup.string().email("Email inválido").required("Email é obrigatório"),
  Cpf: yup.string().required("CPF é obrigatório"),
  Rg: yup.string().required("RG é obrigatório"),
  Sexo: yup.number().required("Sexo é obrigatório"),
  DataNascimento: yup.string().required("Data de nascimento é obrigatória"),
  DddFone: yup.string().required("DDD é obrigatório"),
  Fone: yup.string().required("Telefone é obrigatório"),
  NotificarWhatsApp: yup.boolean().required(),
  Cep: yup.string().required("CEP é obrigatório"),
  Endereco: yup.string().required("Endereço é obrigatório"),
  NumEndereco: yup.string().required("Número é obrigatório"),
  Bairro: yup.string().default(""),
  CodigoCidade: yup.number().required("Código da cidade é obrigatório"),
  CodigoObjetivo: yup.number().required("Código do objetivo é obrigatório"),
  CodigoUsuarioConsultor: yup.number().required("Código do consultor é obrigatório"),
});

type FormData = yup.InferType<typeof schema>;

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CadastroClienteModal({ open, onClose, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      Nome: "",
      Email: "",
      Cpf: "",
      Rg: "",
      Sexo: 1,
      DataNascimento: "",
      DddFone: "",
      Fone: "",
      NotificarWhatsApp: true,
      Cep: "",
      Endereco: "",
      NumEndereco: "",
      Bairro: "",
      CodigoCidade: 0,
      CodigoObjetivo: 0,
      CodigoUsuarioConsultor: 0,
    },
  });

  const handleClose = () => {
    reset();
    setError(null);
    onClose();
  };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      setError(null);

      await cadastrarCliente({
        ...data,
        DataNascimento: new Date(data.DataNascimento).toISOString(),
        Bairro: data.Bairro || null,
      });

      reset();
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao cadastrar cliente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle fontWeight={600}>Cadastrar Cliente</DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="Nome"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nome"
                    fullWidth
                    error={!!errors.Nome}
                    helperText={errors.Nome?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="Email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    error={!!errors.Email}
                    helperText={errors.Email?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Controller
                name="Cpf"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="CPF"
                    fullWidth
                    error={!!errors.Cpf}
                    helperText={errors.Cpf?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Controller
                name="Rg"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="RG"
                    fullWidth
                    error={!!errors.Rg}
                    helperText={errors.Rg?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Controller
                name="Sexo"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.Sexo}>
                    <InputLabel>Sexo</InputLabel>
                    <Select {...field} label="Sexo">
                      <MenuItem value={1}>Masculino</MenuItem>
                      <MenuItem value={2}>Feminino</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="DataNascimento"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Data de Nascimento"
                    type="date"
                    fullWidth
                    slotProps={{ inputLabel: { shrink: true } }}
                    error={!!errors.DataNascimento}
                    helperText={errors.DataNascimento?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 4, sm: 2 }}>
              <Controller
                name="DddFone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="DDD"
                    fullWidth
                    error={!!errors.DddFone}
                    helperText={errors.DddFone?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 8, sm: 4 }}>
              <Controller
                name="Fone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Telefone"
                    fullWidth
                    error={!!errors.Fone}
                    helperText={errors.Fone?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Controller
                name="Cep"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="CEP"
                    fullWidth
                    error={!!errors.Cep}
                    helperText={errors.Cep?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 5 }}>
              <Controller
                name="Endereco"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Endereço"
                    fullWidth
                    error={!!errors.Endereco}
                    helperText={errors.Endereco?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 3 }}>
              <Controller
                name="NumEndereco"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Número"
                    fullWidth
                    error={!!errors.NumEndereco}
                    helperText={errors.NumEndereco?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="Bairro"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Bairro"
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="CodigoCidade"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Código da Cidade"
                    type="number"
                    fullWidth
                    error={!!errors.CodigoCidade}
                    helperText={errors.CodigoCidade?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="CodigoObjetivo"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Código do Objetivo"
                    type="number"
                    fullWidth
                    error={!!errors.CodigoObjetivo}
                    helperText={errors.CodigoObjetivo?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="CodigoUsuarioConsultor"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Código do Consultor"
                    type="number"
                    fullWidth
                    error={!!errors.CodigoUsuarioConsultor}
                    helperText={errors.CodigoUsuarioConsultor?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Controller
                name="NotificarWhatsApp"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    }
                    label="Notificar via WhatsApp"
                  />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={handleClose} disabled={loading}>
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
