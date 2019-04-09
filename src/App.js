import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importar Componentes
import Header from './Componentes/Header';
import Clientes from './Componentes/Clientes';
import NuevoCliente from './Componentes/NuevoCliente';
import EditarCliente from './Componentes/EditarCliente';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Clientes} />
                <Route exact path="/cliente/nuevo" component={NuevoCliente} />
                <Route exact path="/cliente/editar/:id" component={EditarCliente} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
