import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../img";
import { Button } from "../components/componentsindex.js";

const loginAndSignUp = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const [data, setData] = useState({
    password: "",
    email: ""
})
      console.log(password, email)

const url = "http://localhost:3001/api/v1/users/signup";

function handleSubmit(e) {
  e.preventDefault();
  console.log(data);
  setData({
      email: data.email,
      password: data.password   
  });
  axios.post(url, {
      email: email,
      password: password  

    }).then( async (res) => {
      console.lo(res.data)
    })

}



  const socialImage = [
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
    {
      social: images.twitter,
      name: "Continue with twitter",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
  ];
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={Style.user}>
      <div className={Style.user_box}>
        <div className={Style.user_box_social}>
          {socialImage.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
              className={`${Style.user_box_social_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
            >
              <Image
                src={el.social}
                alt={el.name}
                width={30}
                height={30}
                className={Style.user_box_social_item_img}
              />
              <p>
                <span>{el.name}</span>
              </p>
            </div>
          ))}
        </div>
        <p className={Style.user_box_or}>OR</p>

        <div className={Style.user_box_input}>
          <div className={Style.user_box_input_box}>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" value={email} placeholder="example@emample.com"
            onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className={Style.user_box_input_box}>
            <label
              htmlFor="password"
              className={Style.user_box_input_box_label}
            >
              <p>Password</p>
              <p>
                <a href="#">Forget password</a>
              </p>
            </label>
            <input type="password" id="password" value={password} 
            onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <button btnName="Continue" classStyle={Style.button} onClick={handleSubmit}/>
      </div>
    </div>

    </form>
      );
};

export default loginAndSignUp;
