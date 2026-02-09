import { Container } from "@mui/material";
import Header from "../../components/Header";
import TableClients from "./components/TableClients";
import VStack from "../../components/stacks/Vstack";

export default function Clientes() {
  return (
    <>
      <Header />
      <Container
        sx={{
          flex: 1,
          mt: 8,
        }}
      >
        <VStack sx={{ mt: 2 }}>
          <TableClients />
        </VStack>
      </Container>
    </>
  );
}
