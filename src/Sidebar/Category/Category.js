import "./Category.css";
import Input2 from '../../components/inputs';
import logo from "../../assets/impactos.png"; // Ensure this path is correct

function Category({ handleChange }) {
  return (
    <div>
      <h2 style={{ marginTop: 80 }}className="sidebar-title">Category</h2>
      <div>
        <select onChange={handleChange} name="category" id="category">
        <Input2
          handleChange={handleChange}
          value=""
          title="All"
          name="test"
        />
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
        </select>
      </div>
    </div>
  );
}

export default Category;