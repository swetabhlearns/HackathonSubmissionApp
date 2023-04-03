import React, { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import DataContext from "./DataContext";

const Cards = () => {
  const {
    favsData,
    filterData,
    itemData,
    favSubmission,
    allSubmission,
    searchParam,
  } = useContext(DataContext);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (!searchParam.length) setCards(itemData);
    else setCards(filterData);
  }, [filterData, itemData]);
  return (
    <div className="cards">
      {allSubmission &&
        cards?.map((item, idx) => <Card key={idx} item={item} />)}

      {favSubmission &&
        favsData &&
        favsData.map((item, idx) => <Card key={idx} item={item} />)}
    </div>
  );
};

export default Cards;
