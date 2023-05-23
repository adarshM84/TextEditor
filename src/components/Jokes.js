import { useState } from 'react';
import jokeimg from "../jokeimage.png";

function Jokes(props) {
  const [data, setData] = useState(null);
  // https://official-joke-api.appspot.com/random_joke
  async function fetchHindiJokes() {
    try {
      document.getElementById("jokesMessage").innerHTML = "Loading please wait...";
      const response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=d2ea84664639f7d6f8e64f2f65f4');
      const data = await response.json();
      setData(data);
      if (data) {
        setData(data.jokeContent)
        // document.getElementById("jokesMessage").innerHTML=();
      } else {
        document.getElementById("jokesMessage").innerHTML = "Something wrong click again..";
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchEnglishJokes() {
    try {
      document.getElementById("jokesMessage").innerHTML = "Loading please wait...";
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setData(data);
      // console.log(data,"English");
      if (data) {
        setData(data.setup + " " + data.punchline);
        // document.getElementById("jokesMessage").innerHTML=();
      } else {
        document.getElementById("jokesMessage").innerHTML = "Something wrong click again..";
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className={`p-3 container col-md-5 mt-4 text-center bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'light'}`}>
        {/* {data ? <p>{data.jokeContent}</p> : <p>No data yet.</p>} */}
        <div className={`card bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'light'}`} style={{ border: "2px solid" }}>
          <img src={jokeimg} style={{ borderBottom: "2px solid" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Random Jokes</h5>
            <p className="card-text my-4" id="jokesMessage">{data ? data : "No data yet."}</p>
            <button onClick={fetchHindiJokes} className="btn btn-primary my-2">Hindi Jokes</button><button onClick={fetchEnglishJokes} className="btn btn-primary mx-2">English Jokes</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jokes;
