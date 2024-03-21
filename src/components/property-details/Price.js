import React from "react";

const Price = () => {
  return (
    <section className="pricing_table">
      <div className="table-responsive">
        <table className="rounded-corners">
          <tr>
            <th>Type</th>
            <th>Total Area</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>John</td>
            <td>Admin</td>
            <td>North</td>
          </tr>
          <tr>
            <td>Smith</td>
            <td>Logistics</td>
            <td>South</td>
          </tr>
          <tr>
            <td>David</td>
            <td>Transport</td>
            <td>East</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Price;
