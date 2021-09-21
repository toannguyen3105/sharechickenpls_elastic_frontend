import { SyntheticEvent, useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import { Comic } from "../../models/product";

const Comics = () => {
  const [products, setProducts] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/comics`);

        setProducts(data.result);
      } catch (e) {}
    })();
  }, []);

  const convertUnixTimeToDateTime = (UNIX_timestamp: number) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const res = await axios.get(`/comics`, {
        params: {
          name: searchStr,
        },
      });
      const { data } = res;
      setProducts(data.result);
    } catch (e) {}
  };

  return (
    <Wrapper>
      <h2>Movies List</h2>

      <div className="pt-3 pb-2 mb-3 border-bottom">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label>Search</label>
            <input
              type="search"
              className="form-control"
              onChange={({ target }) => setSearchStr(target.value)}
            />
          </div>
        </form>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Author</th>
              <th scope="col">Revenue</th>
              <th scope="col">Created_at</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Comic, index: number) => {
              return (
                <tr key={index}>
                  <td>{product._source.name}</td>
                  <td>{product._source.description}</td>
                  <td>{product._source.author}</td>
                  <td>${product._source.revenue}</td>
                  <td>
                    {convertUnixTimeToDateTime(product._source.timestamp)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Comics;
