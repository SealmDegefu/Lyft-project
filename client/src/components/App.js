import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";
import Footer from './Footer'
import Bridesmaid from '../pages/Bridesmaid/Bridesmaid'
import AddUser from "../pages/AddUser";
import EditUser from "../styles/EditUser";
import GlobalProvider from '../context/GlobalState'
import Countdown from "./Countdown";


function App() {
  const [user, setUser] = useState(null);
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    fetch("/checklists")
      .then((r) => r.json())
      .then(setChecklists);
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleUpdateChecklist(updatedChecklist) {
    setChecklists((checklists) =>
      checklists.map((checklist) => {
        return checklist.id === updatedChecklist.id ? updatedChecklist : checklist;
      })
    );
  }

  function handleDeleteChecklist(deletedChecklist) {
    setChecklists((checklists) =>
      checklists.filter((checklist) => checklist.id !== deletedChecklist.id)
    );
  }
  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <GlobalProvider>
      <NavBar user={user} setUser={setUser} />
      <Footer />
      <main>
        <Switch>
          <Route exact path="/">
            <Countdown />
          </Route>
          <Route path= "/new">
            <NewRecipe user={user} />
          </Route>
          <Route path= "/recipe">
          {checklists.map((checklist) => (
            <RecipeList
              key={checklist.id}
              checklist={checklist}
              onUpdatedChecklist={handleUpdateChecklist}
              onDeleteChecklist={handleDeleteChecklist}
            />
          ))}
          </Route>
          <Route path="/bridesmaid">
            <Bridesmaid />
          </Route>
          <Route path="/add">
            <AddUser />
          </Route>
          <Route path="/edit/:id">
            <EditUser />
          </Route>
        </Switch>
      </main>
      </GlobalProvider>
    </>
  );
}

export default App;
