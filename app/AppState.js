import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  house = [
    new House({
      year: 2020,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2500,
      price: 400000,
      description: 'Cozy and comfortable family home.',
      imgUrl: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
    new House({
      year: 1920,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2000,
      price: 350000,
      description: 'Vintage family home.',
      imgUrl: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
  ]

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())