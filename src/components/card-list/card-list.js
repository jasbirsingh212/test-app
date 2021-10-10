import React from "react";
import "./card-list.css";
import { Card } from "antd";

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, id, email } = monster;
        return (
          <Card  key={id} hoverable>
            <img src={`https://robohash.org/${id}?set=set2`} alt="monster" width='70%'/>
            <h2>{name}</h2>
            <p>{email}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default CardList;
