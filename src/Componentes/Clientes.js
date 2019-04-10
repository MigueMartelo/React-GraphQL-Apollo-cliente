import React, { Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

import { CLIENTES_QUERY } from '../queries';
import { ELIMINAR_CLIENTE } from '../mutations';

const Clientes = () => (
  <Query query={CLIENTES_QUERY} pollInterval={500}>
    {({ loading, error, data, startPolling, stopPolling }) => {
      if (loading) return "Cargando...";
      if (error) return `Error: ${error.message}`;
      //console.log(data.getClientes);

      return (
        <Fragment>
          <h2 className="text-center">Listado Clientes</h2>
          <ul className="list-group mt-4">
            {data.getClientes.map(cliente => (
              <li key={cliente.id} className="list-group-item">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-8 d-flex justify-content-between align-items-center">
                    {cliente.nombre} {cliente.apellido} - {cliente.empresa}
                  </div>
                  <div className="col-md-4 d-flex justify-content-end">
                    <Mutation mutation={ELIMINAR_CLIENTE} >
                      {eliminarCliente => (
                        <button
                          type="button"
                          className="btn btn-danger d-block d-md-inline-block mr-2"
                          onClick={() => {
                            if (window.confirm('Seguro que deseas eliminar este cliente?')) {
                              eliminarCliente({
                                variables: { id: cliente.id }
                              });
                            }
                          }}
                        >
                          &times; Eliminar
                        </button>
                      )}
                    </Mutation>
                    <Link
                      to={`/cliente/editar/${cliente.id}`}
                      className="btn btn-success d-block d-md-inline-blok">
                      Editar Cliente
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fragment>
      )
    }}
  </Query>
);
 
export default Clientes;