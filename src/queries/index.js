import gql from 'graphql-tag';

export const CLIENTES_QUERY = gql`{
  getClientes{
    id
    nombre
    apellido
    empresa
  }
}`;

export const CLIENTE_QUERY = gql`
  query getCliente($id: ID){
  getCliente(id: $id){
    id
    nombre
    apellido
    empresa
    emails {
      email
    }
    edad
    tipo
  }
}
`;