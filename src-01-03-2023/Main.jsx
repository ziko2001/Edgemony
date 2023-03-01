import { productsList } from "./mocks/productsList";
import Control from "./components/control";
import Hero from './components/hero';
import Gallery from "./components/gallery";
import ListProducts from "./components/listProducts/ListProducts"
import "./Main.css"


const Main = () => {
    return (
        <div className="Main">
            <Hero title="Store" />
            <Gallery imageUrls />
            <Control listDataLenght={productsList.length} />
            <h1>Questa è la lista dei Prodotti</h1>
            <ListProducts listData={productsList} />
        </div>
    );
};

export default Main;