import data from "./data.json";

const Main = () => {
  return (
    <main>
      {data.map((item) => (
        <div key={item.id} className="card">
          <div
            style={{ backgroundColor: item.logoBackground }}
            className="logo-container"
          >
            <img src={item.logo} alt={item.company}></img>
          </div>

          <div className="time">
            <p>{item.postedAt}</p>
            <p>{item.contract}</p>
          </div>
          <h1>{item.position}</h1>
          <p>{item.company}</p>
          <h2>{item.location}</h2>
        </div>
      ))}
      <button className="btn" style={{ margin: "0 auto" }}>
        Load More
      </button>
    </main>
  );
};

export default Main;
