import React, { useEffect, useState } from "react";
import Users from "./components/Users/Users";
import "./App.css";
import Header from "./components/Header/Header";

const prevUsers = [
  {
    username: "eslam",
    email: "eslamicoo@gmail.com",
    website: "www.google.com",
    img: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x900.jpg",
  },
  {
    username: "eslam",
    email: "eslamicoo@gmail.com",
    website: "www.google.com",
    img: "https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/1:1/w_120,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg%20120w,%20https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/1:1/w_240,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg%20240w,%20https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/1:1/w_320,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg%20320w,%20https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/1:1/w_640,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg%20640w,%20https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/1:1/w_960,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg%20960w",
  },
];

const App = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    website: "",
    img: "",
  });
  const [users, setUsers] = useState([]);
  const [htmlCheck, setHtmlCheck] = useState(false);
  const [cssCheck, setCssCheck] = useState(false);
  const [jsCheck, setjsCheck] = useState(false);

  const { username, email, website, img } = data;

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClear = (e) => {
    e.preventDefault();
    setData({
      username: "",
      email: "",
      website: "",
      img: "",
    });
  };

  const handleHtml = () => {
    setHtmlCheck(!htmlCheck);
  };
  const handleCss = () => {
    setCssCheck(!cssCheck);
  };
  const handleJs = () => {
    setjsCheck(!jsCheck);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, data]);
  };

  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <input
            placeholder="Website"
            type="text"
            name="website"
            value={website}
            onChange={handleChange}
          />
          <input
            placeholder="Image"
            type="text"
            name="img"
            value={img}
            onChange={handleChange}
          />
          <div className="boxes">
            <div className="field">
              <label>Html</label>
              <input
                type="checkbox"
                value="html"
                name="html"
                onChange={handleHtml}
              />
            </div>
            <div className="field">
              <label>Css</label>
              <input
                type="checkbox"
                value="css"
                name="languages"
                onChange={handleCss}
              />
            </div>
            <div className="field">
              <label>Javascript</label>
              <input
                type="checkbox"
                value="javascript"
                name="languages"
                onChange={handleJs}
              />
            </div>
          </div>
          <div className="btns">
            <button className="submit" type="submit">
              Submit
            </button>
            <button className="clear" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
        <div className="hr"></div>
        <div className="users">
          <Users users={users} html={htmlCheck} css={cssCheck} js={jsCheck} />
        </div>
      </div>
    </div>
  );
};

export default App;
