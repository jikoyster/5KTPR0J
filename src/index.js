import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { BrowserRouter, HashRouter as Router, Route } from 'react-router-dom'




import './index.css'

import Header from './containers/Header/Header2'
import Campaigns from './components/Campaigns'
import Sponsors from './containers/Sponsor/Sponsor'
import SponsorView from './containers/Sponsor/SponsorView'
import Events from './components/Events'
import Prospects from './components/Prospects'
import Reports from './components/Reports'

import reducers from './reducers'

import registerServiceWorker from './registerServiceWorker'

const uri = 'https://profileapi.aktify.com/graphql'
// const uri = 'http://localhost:3000/graphql'

const networkInterface = createNetworkInterface({
  uri,
})

const client = new ApolloClient({
  networkInterface,
})

const rootReducer = combineReducers({
  ...reducers,
  apollo: client.reducer(),
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider
      store={createStore(rootReducer, {}, applyMiddleware(client.middleware()))}
      client={client}
    >
      <div>
        <Route path="/" component={Header} />
        <main>
          <Route path="/campaigns" component={Campaigns} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route path="/sponsors/:sponsorId" component={SponsorView} />
          <Route path="/events" component={Events} />
          <Route path="/prospects" component={Prospects} />
          <Route path="/reports" component={Reports} />
        </main>
      </div>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
