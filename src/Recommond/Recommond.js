import "./Recommond.css"
import Button from "../components/buttons";
function Recommond({handleClick, length}){
    return(
        <>
      <div>
      <h2 className="recommended-title">Results Found</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
        <h3 className="results-found">Number of Results Found: {length}</h3>
      </div>
    </>
    )
}
export default Recommond;