import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { Pop } from "../utils/Pop.js";



class HousesService {

  createHouseListing(houseData) {
    console.log('service creating house', houseData);
    const createdCard = new House(houseData)
    AppState.house.unshift(createdCard)
    console.log('AppState houses', AppState.house);
    this.saveHouses()
  }


  deleteHouseListing(houseId) {
    console.log('service delteting', houseId);
    const houseToDelete = AppState.house.find(house => house.id == houseId)
    console.log('🔥🚙', houseToDelete);
    const indexToRemove = AppState.house.indexOf(houseToDelete)
    AppState.house.splice(indexToRemove, 1)
    Pop.toast(`Deleting home built in ${houseToDelete.year}`)
    this.saveHouses()
  }


  saveHouses() {
    let stringData = JSON.stringify(AppState.house)
    localStorage.setItem('gregslist_houses', stringData)
  }


  loadHouses() {
    let stringData = localStorage.getItem('gregslist_houses')
    console.log('🧵💾', stringData);
    let housesData = JSON.parse(stringData)
    console.log('🚙🚙💾', housesData);
    if (!housesData) return
    const houses = housesData.map(houseData => new House(houseData))
    console.log('✨🚙🚙', houses);
    AppState.house = houses
  }
}

export const housesService = new HousesService()