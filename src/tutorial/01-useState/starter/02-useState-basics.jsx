import { useState } from "react";

const UseStateBasics = () => {
  const [num, setNum] = useState(3500);

  console.log(num);

  const [theme, setTheme] = useState("light");
  console.log(theme);

  const [sound, setSound] = useState("Sound ON");
  console.log(sound);

  //  const value = useState('hello world')[0]
  //  const func = useState('hello world')[1]

  //  console.log(value);
  //  console.log(func);
  return (
    <div>
      useState basics
      <p>{num}</p>
      <button onClick={() => setNum(num + 3500)}>Add +1</button>

      <h2>{theme} mode is on</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change to {theme === "light" ? "dark" : "light"}
      </button>


      <h3>{sound}</h3>
      <button
        onClick={() => setSound(sound === "Sound Of" ? "Sound ON" : "Sound Of")}
      >
        Chang to {sound === 'Sound Of' ? 'Sound ON' : 'Sound Of'}
      </button>
    </div>
  );
};

export default UseStateBasics;
