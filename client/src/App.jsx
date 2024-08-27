import  *  as  Realm  from  "realm-web";
import axios from "axios";
import { useState, useEffect } from "react";
import Form from "./pages/Form.jsx";
import Result from "./pages/Result.jsx";
import Admin from "./pages/Admin.jsx";
import { Routes, Route } from 'react-router-dom';

const app = new Realm.App({id:process.env.REACT_APP_MONGODB_APP_ID || ""});

const App = () => {
  const [_user, setUser] = useState();
  const [submitters, setSubmitters] = useState([]);

  useEffect(() => {
      const login = async () => {
          const user = await app.logIn(Realm.Credentials.anonymous());
          setUser(user);

          const mongodb = app.currentUser.mongoClient("mongodb-atlas");
          const collection = mongodb.db("data").collection("submitters");

          const previousSubmitters = (await axios.get("https://domain-questionnaire-backend.onrender.com/")).data;
          setSubmitters(previousSubmitters);

          for await (const _change of collection.watch()) {
            const allSubmitters = (await axios.get("https://domain-questionnaire-backend.onrender.com/")).data;
            setSubmitters(allSubmitters);
          }
      }
      login();
  }, []);

  const [result, setResult] = useState(localStorage.getItem('domain') || '');
  return (
    <Routes>
      <Route path='/' element={result ? <Result>{result}</Result> : <Form setResult={setResult} />} />
      <Route path='/admin' element={<Admin submitters={submitters} />} />
    </Routes>
  );
}

export default App;
