import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import { searchPlanet } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { createFont, debounce } from "../../helpers";
import "./home.css";

export default function Home() {
  const allowedTime = 60000;
  const [search, setSearch] = useState("");
  const info = useSelector((state) => ({
    planets: state.search,
    userInfo: state.login.user,
  }));
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (new Date().getTime() - time > allowedTime) {
      setCount(0);
      setTime(new Date().getTime());
    }
  }, [time, count]);

  const dipatch = useDispatch();

  const inputCallback = debounce(function (e) {
    searchPlanet(dipatch, search);
  }, 1000);

  const handleSearch = (e) => {
    e.persist();

    console.log(new Date().getTime() - time);
    if (count <= 15 || info.userInfo.name === "Luke Skywalker") {
      setSearch(e.target.value);
      setCount(count + 1);
      inputCallback(e);
    } else {
      alert("No more search allowed in this minute");
    }
  };

  return (
    <div>
      <section className="search">
        <Input
          id="search"
          label="Serch Planet"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </section>
      <section className="planets">
        {info &&
          info.planets &&
          info.planets.data &&
          info.planets.data.map((v) => (
            <div className="planet" key={v.name.replace(/ /g, "")}>
              <p
                style={{
                  fontSize: createFont(v.population),
                }}
              >
                {v.name}
              </p>
            </div>
          ))}
      </section>
    </div>
  );
}
