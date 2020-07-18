import React from "react";
import { withHouseConsumer } from "../context";
import Loading from "./Loading";
import HousesFilter from "./HousesFilter";
import HousesList from "./HousesList";

function HouseContainer({ context }) { // ROC
  const { loading, sortedHouses, houses } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <HousesFilter houses={houses} />
      <HousesList houses={sortedHouses} />
    </>
  );
}

export default withHouseConsumer(HouseContainer);

// import React from "react";
// import { HouseConsumer } from "../context";
// import Loading from "./Loading";
// import HousesFilter from "./HousesFilter";
// import houselist from "./houselist";
// export default function HouseContainer() {
//   return (
//     <HouseConsumer>
//       {value => {
//         const { loading, setHouse, sortedHouses,houses } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <HousesFilter houses={houses} />
//             <houselist houses={sortedHouses} setHouse={setHouse} />
//           </>
//         );
//       }}
//     </HouseConsumer>
//   );
// }
