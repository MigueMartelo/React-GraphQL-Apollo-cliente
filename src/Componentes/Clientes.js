import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import { CLIENTES_QUERY } from '../queries';

const Clientes = () => (
  <Query query={CLIENTES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Cargando...";
      if (error) return `Error: ${error.message}`;
      console.log(data.getClientes);

      return (
        <Fragment>
          <h2 className="text-center mt-4">Listado Clientes</h2>
          <ul className="list-group mt-4">
            {data.getClientes.map(cliente => (
              <li key={cliente.id} className="list-group-item">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-8 d-flex justify-content-between align-items-center">
                    {cliente.nombre} {cliente.apellido} - {cliente.empresa}
                  </div>
                  <div className="col-md-4 d-flex justify-content-end">
                    <a className="btn btn-success d-block d-md-inline-blok">
                      Editar Cliente
                    </a>
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