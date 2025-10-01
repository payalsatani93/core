import React from "react";

export default function Clas() {
  class Car {
    constructor(name) {
      this.brand = name;
    }
  }
  const mycar = new Car("Ford");

  const myfunc = () => {
    alert("Hello World");
  };

  const mystyles = {
    color: "red",
  };

  function fruit() {
    const x = 5;
    let y = "Apple";
    if (x < 10) {
      y = "Banana";
    }
    return y;
  }

  //  Intro component
  function Intro() {
    return <p>I'm Payal...!</p>;
  }

  //  Name component (renders Intro inside it)
  function Name() {
    return (
      <>
        <h1>Who Are You..?</h1>
        <Intro /> {/* this renders Intro */}
      </>
    );
  }

  function Town(props) {
    return <p>I Am From {props.city}.</p>;
  }

  function From() {
    return (
      <>
        <h2>Were Are You From...?</h2>
        <Town city="Rajkot" />
        <Town city="Ahemdabad" />
      </>
    );
  }

  function Carss(props) {
    return <>{props.brand && <h1>My car is a {props.brand}</h1>}</>;
  }

  function Fevfruits() {
    const Fruits = [
      { id: 301, Nam: "Apple" },
      { id: 302, Nam: "Castard Apple" },
      { id: 303, Nam: "Banana" },
    ];

    return (
      <>
        <h1>My FavFruits Are....</h1>
        <ul>
          {Fruits.map((Fruit) => (
            <li key={Fruit.id}>{Fruit.Nam} </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className="p-4">
      <p className="mb-4">{mycar.brand}</p>

      <button
        onClick={() => alert("Hello World")}
        className="px-4 py-2 text-black rounded border-2 border-black hover:bg-gray-600 hover:text-white"
      >
        Click me
      </button>

      <br />

      <button
        onClick={myfunc}
        disabled={true}
        className="p-4 rounded-2xl border-2 border-black mt-2"
      >
        Click Me
      </button>

      <h1 style={mystyles}>mystyles</h1>
      <h1>{fruit()}</h1>

      {/* Render Name (which also renders Intro) */}
      <Name />

      <From />

      <Carss brand="Ford" />

      <Fevfruits />
    </div>
  );
}
