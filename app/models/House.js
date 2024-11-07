import { generateId } from "../utils/GenerateId.js"


export class House {
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.listedAt = data.listedAt == undefined ? new Date() : new Date(data.listedAt)
  }


  get Card() {
    return `
         <div class="col-md-4 mb-2">
         <div class="card shadow-sm">
           <img class="card-img p-2"
             src="${this.imgUrl}"
             alt="">
           <div class="card-body">
             <p class="text-center fw-bold">
               Year: ${this.year} 
               Bedrooms: ${this.bedrooms} 
               Bathrooms: ${this.bathrooms}
             </p>
             <p class="mb-0">
               Sq. Ft:${this.sqft}
             </p>
             <p class="mb-0">
               $${this.price}
             </p>
             <p class="text-center">
               ${this.description}
             </p>
             <p class="mb-0">
               ${this.FormattedTime}
             </p>
             <div>
              <button onclick="app.HousesController.deleteHouseListing('${this.id}')" class="btn btn-danger w-100" title="Delete Home"><i class="mdi mdi-delete-empty"></i></button>
             </div>
           </div>
         </div>
       </div>
    `
  }

  get FormattedTime() {
    return this.listedAt.toLocaleDateString('en-us', { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric', minute: '2-digit', second: "2-digit" })
  }
}