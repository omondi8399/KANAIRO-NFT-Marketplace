import React from "react";
import { TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "../Subscription/Subscription.module.css";
import { Button } from "../components/componentsindex.js";

const Subscription = ({ el, i }) => {
  return (
    <div className={Style.SubscriptionBox}>
      <div className={Style.SubscriptionBox_box}>
        <span className={Style.SubscriptionBox_box_span}>{el.plan}</span>
        <small className={Style.SubscriptionBox_box_small}>
          {el.popular || ""}
        </small>
        <p className={Style.SubscriptionBox_box_price}>{el.price}</p>

        <div className={Style.SubscriptionBox_box_info}>
          {el.service.map((el, i) => (
            <p className={Style.SubscriptionBox_box_info_para} key={i + 1}>
              <span>
                <TiTick />
              </span>
              {el}
            </p>
          ))}
        </div>
        <Button
          btnName="Submit"
          handleClick={() => {}}
          classStyle={Style.button}
        />
      </div>
    </div>
  );
};

export default Subscription;