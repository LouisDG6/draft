// Import Our Components
import AllBakies from "./pages/AllBakies";
import SingleBakie from "./pages/SingleBakie";
import Form from "./pages/Form";
import Header from "./components/header";
import Footer from "./components/footer";
import Modal from 'react-modal'
import './index.css';

// Import Hooks from React
import { useState, useEffect } from "react";

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom";

/////////////////////////
// Style Object
/////////////////////////
const h1 = {
  textAlign: "center",
  margin: "10px",
};

const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto",
};

function App() {
  ///////////////////////////
  // State and Other Variables
  ///////////////////////////

  const navigate = useNavigate();

  const url = "https://lgcapstonebackend.herokuapp.com/bigmomscakies/";

  // state to hold list of todos
  const [bakies, setBakies] = useState([]);

  // an empty todo for initializing the create form
  const nullBakery = {
    name: "",
    details: "",
  };

  const [targetBakery, setTargetBakery] = useState(nullBakery);

  //////////////
  // Functions
  //////////////

  // function to get list of todos from API
  const getBakeries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBakies(data);
  };

  // function to add todos
  const addBakeries = async (newBakery) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBakery),
    });

    //update the list of todos
    getBakeries();
  };

  // to select a todo to edit
  const getTargetBakery = (bakery) => {
    setTargetBakery(bakery);
    navigate("/edit");
  };

  // update todo for our handlesubmit prop
  const updateBakery = async (bakery) => {
    await fetch(url + bakery.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bakery),
    });

    //update our todos
    getBakeries();
  };

  const deleteBakery = async (bakery) => {
    await fetch(url + bakery.id, {
      method: "delete"
    })

    getBakeries()
    navigate("/bigmomscakies")
  }

  //////////////
  // useEffects
  //////////////

  useEffect(() => {
    getBakeries();
  }, []);

  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
   
    <div className="App">
      <Header/>
      <Link to="/new">
        <button style={button}>Create New Cakie</button>
      </Link>

      <Routes>
        <Route path="/bigmomscakies" element={<AllBakies bakies={bakies} />} />
        <Route path="/bigmomscakies/:id" element={<SingleBakie 
        bakies={bakies} 
        edit={getTargetBakery}
        deleteBakery={deleteBakery}
        />} />
        <Route
          path="/new"
          element={
            <Form
              initialBakery={nullBakery}
              handleSubmit={addBakeries}
              buttonLabel="Create Cakie"
            />
          }
        />
        <Route path="/edit" element={<Form
          initialBakery={targetBakery}
          handleSubmit={updateBakery}
          buttonLabel="Update Cakie"
        />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;