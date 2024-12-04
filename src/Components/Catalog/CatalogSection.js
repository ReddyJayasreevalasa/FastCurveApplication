import Cart from "./Cart";
import CatalogList from "./CatalogList";

 const CatalogSection=()=>{
 return <div className="catalog-section">
          <div className="catalog-container">
          <CatalogList />
          <div className="line" />
          <Cart />
          </div>
        </div>
}
export default CatalogSection;