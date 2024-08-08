import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ItemDetails from './components/ItemDetails';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Form></Form>
    <Routes>
                {/* <Route path="/" element={<Form />} /> */}
                <Route path="/:resourceType/:id" element={<ItemDetails />} />
            </Routes>
      

    </div>
  );
}

export default App;
