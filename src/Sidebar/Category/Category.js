import "./Category.css";
import Input2 from '../../components/inputs';
import logo from "../../assets/impactOS.jpeg"; // Ensure this path is correct

function Category({ handleChange }) {
  return (
    <div>
      <h2 style={{ marginTop: 80 }}className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input2
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input2
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input2
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input2
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;