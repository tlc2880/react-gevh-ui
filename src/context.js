import React, { Component } from "react";
//import items from "./data";
 import Client from "./Contentful";

const HouseContext = React.createContext();

export default class HouseProvider extends Component {
   state = {
    houses: [],
    sortedHouses: [],
    featuredHouses: [],
    loading: true,
    type: "all",
    capacity: 7,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 1500,
    maxSize: 2500,
    pool: false,
    pets: false
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "reactGevhUi",
        //order: "sys.createdAt" // new code to orderly display type the rooms
        order: "fields.price" // new code to orderly display base on price of rooms
      });
      let houses = this.formatData(response.items);
      let featuredHouses = houses.filter(house => house.featured === true);
      let maxPrice = Math.max(...houses.map(item => item.price));
      let maxSize = Math.max(...houses.map(item => item.size));
      this.setState({
        houses,
        featuredHouses,
        sortedHouses: houses,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
    //  let houses = this.formatData(items);
    //  // console.log(houses);
    //  let featuredHouses = houses.filter(house => house.featured === true);
    
    // let maxPrice = Math.max(...houses.map(item => item.price));
    // let maxSize = Math.max(...houses.map(item => item.size));
    // this.setState({
    //   houses,
    //   featuredHouses,
    //   sortedHouses: houses,
    //   loading: false,
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize
    //   });
  }

  formatData(items) {
     let tempItems = items.map(item => {
     let id = item.sys.id;
     let images = item.fields.images.map(image => image.fields.file.url);

     let house = { ...item.fields, images, id };
     return house;
    });
    return tempItems;
  }
  getHouse = slug => {
    let tempHouses = [...this.state.houses];
    const house = tempHouses.find(house => house.slug === slug);
    return house;
  };

   handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(target, name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterHouses
    );
  }

  filterHouses = () => {
  
    let {
      houses,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      pool,
      pets
    } = this.state;

    let tempHouses = [...houses];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
     tempHouses = tempHouses.filter(house => house.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
     tempHouses = tempHouses.filter(house => house.capacity >= capacity);
    }
    // filter by price
   tempHouses = tempHouses.filter(house => house.price <= price);
    //filter by size
   tempHouses = tempHouses.filter(
      house => house.size >= minSize && house.size <= maxSize
    );
    //filter by pool
    if (pool) {
     tempHouses = tempHouses.filter(house => house.pool === true);
    }
    //filter by pets
    if (pets) {
     tempHouses = tempHouses.filter(house => house.pets === true);
    }
    this.setState({
      sortedHouses: tempHouses
    });
  }

  render() {
    return (
      <HouseContext.Provider
      //value="Hello Tommy"
       value={{
         ...this.state,
         getHouse: this.getHouse,
         handleChange: this.handleChange
      }}
      >
        {this.props.children}
      </HouseContext.Provider>
    );
  }  
}

const HouseConsumer = HouseContext.Consumer;

export { HouseProvider, HouseConsumer, HouseContext };

export function withHouseConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HouseConsumer>
        {value => <Component {...props} context={value} />}
      </HouseConsumer>
    );
  };
}
