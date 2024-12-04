import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CatalogComponent from "./CatalogComponent";
import { addToCart } from "../../Reducer/productDataSlice";

export default function CatalogList() {
  const data = useSelector((state) => state.productData.catalogList);
  const [catalog, setCatalog] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length) {
      setCatalog(data.slice(0, 3));
    }
  }, [data]);

  const addMore = () => {
    const list = data.slice(catalog.length, catalog.length + 3);
    const catalogData = [...catalog, ...list];
    setCatalog(catalogData);
  };

  const addMyCart = useCallback((payload) => {
    dispatch(addToCart(payload));
  }, []);
  return (
    <div>
      <div className="catalog_container">
      <strong className="home-name">Catalog</strong>
        {catalog.map((val, index) => {
          return (
            <div>
              <CatalogComponent
                key={index + val.name}
                addToCart={addMyCart}
                index={index}
                {...val}
              />
            </div>
          );
        })}
      </div>
      {data.length && data.length !== catalog.length && (
        <span className="show-more" onClick={addMore}>
          Show More
        </span>
      )}
    </div>
  );
}
