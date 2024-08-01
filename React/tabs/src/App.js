import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import styles from './components/Tab.module.css'



function App() {
  return (
    <div className={styles.App}>
      <Tabs></Tabs>
    </div>
  );
}

export default App;
