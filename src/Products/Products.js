import "./Products.css";

const Products = ({ result }) => {
  return (
    <>
      {/* <section className="card-container">{result}</section> */}
      
      <div className="table-container">
      <table role="table" className="table">
      <thead className="table-header">
        <tr role="row" className="table-header-row">
          <th role="columnheader" className="key-heading">Activity Name</th>
          <th role="columnheader" className="key-heading">Factors</th>
          <th role="columnheader" className="key-heading">Sector</th>
          <th role="columnheader" className="key-heading">Category</th>
          <th role="columnheader" className="key-heading">Source</th>
          <th role="columnheader" className="key-heading">Years</th>
          <th role="columnheader" className="key-heading">Regions</th>
          <th role="columnheader" className="key-heading">Unit Type</th>
          </tr>
      </thead>
      <tbody>
        {result}
      </tbody>
      </table>
      </div>
    </>
  );
};

export default Products;
