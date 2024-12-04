import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from '../../Reducer/productDataSlice'
export default function Cart() {
  const data = useSelector((state) => state.productData);
  const dispatch = useDispatch();
  const handleDeleteItem = (index) => {
    dispatch(deleteFromCart(index));
  };
  return (
    <div>
      <h4>Your Cart</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Unit price</th>
            <th scope="col">QTY</th>
            <th scope="col">Total Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.catalogList.map((val, index) => {
            if (val.isAdded) {
              return (
                <tr>
                  <th scope="row">{val.name}</th>
                  <td>{val.unitPrice}</td>
                  <td>{val.qty}</td>
                  <td>{val.qty * val.unitPrice}</td>
                  <td onClick={() => handleDeleteItem(index)}>Delete</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {data.totalPrize > 0 && <div className="total-class">Total: {data.totalPrize}<br/>
        GST(18%): {(data.totalPrize*18)/100}<br/>
        Grand Total:{((data.totalPrize*18)/100)+data.totalPrize}
        </div>}
    </div>
  );
}
