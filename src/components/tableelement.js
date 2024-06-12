import { BsFillBagFill } from "react-icons/bs";

const TableElement = ({ title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
    <tr className="element-details">
        <td className="element-title">{title}</td>
        <td className="card-reviews">
        {star} {star} {star} {star}
        </td>
        <td className="total-reviews">{reviews}</td>
        <td className="card-price">{prevPrice}</td>
        <td className="price">{newPrice}</td>
        <td className="bag"> <BsFillBagFill className="bag-icon" /></td>
    </tr>
    </>
  );
};

export default TableElement;