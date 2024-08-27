import  *  as  Realm  from  "realm-web";
import axios from "axios";
import { useState, useEffect } from "react";
import Form from "./pages/Form.jsx";
import Result from "./pages/Result.jsx";

const app = new Realm.App({id:process.env.MONGODB_APP_ID || "application-0-tkggfhw"});

const App = () => {
  const [user, setUser] = useState();
  const [submitters, setSubmitters] = useState([]);

  useEffect(() => {
      const login = async () => {
          const user = await app.logIn(Realm.Credentials.anonymous());
          setUser(user);

          const mongodb = app.currentUser.mongoClient("mongodb-atlas");
          const collection = mongodb.db("data").collection("submitters");

          const previousSubmitters = (await axios.get("http://localhost:5000/")).data;
          setSubmitters(previousSubmitters);

          for await (const _ of collection.watch()) {
            const allSubmitters = (await axios.get("http://localhost:5000/")).data;
            setSubmitters(allSubmitters);
          }
      }
      login();
  }, []);

  const [result, setResult] = useState(localStorage.getItem('domain') || '');
  return (
    result ? <Result submitters={submitters}>{result}</Result> : <Form setResult={setResult} />
  );
}

export default App;
