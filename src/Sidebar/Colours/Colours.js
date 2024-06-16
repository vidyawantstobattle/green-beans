import './Colours.css';
import Input2 from '../../components/inputs';

const Colors = ({handleChange}) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <select onChange={handleChange} name="colours" id="colours">
        {/* <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label> */}

        <Input2
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input2
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input2
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input2
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        </select>

        {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> */}
      </div>
    </>
  );
};

export default Colors;
