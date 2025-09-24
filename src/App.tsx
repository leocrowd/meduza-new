import Header from "./components/Header/Header"
import styles from './App.module.css';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductList from "./components/Products";


function App() {
  return(
    <div className={styles.container}>
    <Header />
    <Hero />
    <hr />
    <ProductList />
    <hr />
    <Footer />
    </div>
  )
  
  
}

export default App
