import { useRef } from "react";

export default function CatalogComponent({
  addToCart,
  name,
  unitPrice,
  index,
  isAdded,
}) {
  const ref = useRef(null);
  const addCart = () => {
    if (ref.current.value) {
      addToCart({ index, qty: ref.current.value });
    } else {
      alert("Please Add Quanity");
    }
  };
  return (
    <div className="grid-compo">
      <div className="text">{name}</div>
      <div className="text">Unit Price: Rs{unitPrice}</div>
      <div>
        <input ref={ref} type="number" placeholder="Enter Qty" className="input-qty"></input>
      </div>
      <div>
        <button disabled={isAdded} onClick={addCart} className="btn btn-outline-primary">{`${
          isAdded ? "Added" : "Add to cart"
        }`}</button>
      </div>
    </div>
  );
}
