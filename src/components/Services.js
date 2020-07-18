import React, { Component } from "react";
import { FaCoffee, FaShoppingCart, FaLock, FaDesktop} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCoffee />,
        title: "Free Coffee and Tea",
        info:
          "Coffee maker and tea provided"
      },
      {
        icon: <FaShoppingCart />,
        title: "Supermarket Nearby",
        info:
          "Directions and discount information is provided to help save you money when shopping"
      },
      {
        icon: <FaDesktop />,
        title: "Free Use of Xbox-360",
        info:
          "Enjoy free use of Xbox-360 with popular games on a large screen"
      },
      {
        icon: <FaLock />,
        title: "Self Checkin",
        info:
          "A checkin code will be provided for checkin.  No more lost card keys and code is erased after checkout."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
