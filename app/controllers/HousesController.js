import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";


export class HousesController {
  constructor() {
    console.log('🚙🎮');
    housesService.loadHouses()
    this.drawHouses()
  }


  drawHouses() {
    // console.log('✏️🚙🚙');
    const housesListingsElm = document.getElementById('house-listings')
    housesListingsElm.innerHTML = ''
    AppState.house.forEach(house => housesListingsElm.innerHTML += house.Card)
  }

  createHouseListing() {
    event.preventDefault()
    const formElm = event.target
    // console.log('Creating a House', formElm);
    console.log(formElm.year.value);
    const formData = {
      year: formElm.year.value,
      bedrooms: formElm.bedrooms.value,
      bathrooms: formElm.bathrooms.value,
      sqft: formElm.sqft.value,
      price: formElm.price.value,
      description: formElm.description.value,
      imgUrl: formElm.imgUrl.value,
    }
    console.log(formData);
    housesService.createHouseListing(formData)
    this.drawHouses()
  }

  deleteHouseListing(houseId) {
    console.log('🔥deleting!', houseId);
    const confirmed = confirm("Are you sure you want to delete this? this action cannot be REVERED. It will be gone forevah!")
    if (!confirmed) return
    const areYourSureSure = confirm("Are you absolutely Sure?")
    if (!areYourSureSure) return
    const typingChallange = prompt('Please type "Hell Yeah" to confirm this action')
    if (typingChallange != 'Hell Yeah') return

    housesService.deleteHouseListing(houseId)
    this.drawHouses()
  }
}