import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import { Indice } from "../models/indice";

const Dashboard = () => {
  const [indices, setIndices] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/indices`);

        setIndices(data?.result);
      } catch (e) {}
    })();
  }, []);

  return (
    <Wrapper>
      <h2>Indices List</h2>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {indices.map((indice: Indice, index: number) => {
              return (
                <tr key={index}>
                  <td>{indice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
