const PageContent = ({ selectedItem }) => {
  return (
    <main className="card-page">
      <div className="card-page-header">
        <div
          style={{ backgroundColor: selectedItem.logoBackground }}
          className="page-logo-container"
        >
          <img src={selectedItem.logo} alt={selectedItem.company}></img>
        </div>
        <div className="company-name">
          <h1>{selectedItem.company}</h1>
          <p>{selectedItem.website}</p>
        </div>
        <button className="btn">Company Site</button>
      </div>
      <div className="card-page-content">
        <div className="card-page-content-header">
          <div className="left">
            <div className="time">
              <p>{selectedItem.postedAt}</p>
              <p>{selectedItem.contract}</p>
            </div>
            <h1>{selectedItem.position}</h1>
            <p>{selectedItem.company}</p>
            <h2>{selectedItem.location}</h2>
          </div>
          <div className="right">
            <button className="btn">Apply Now</button>
          </div>
        </div>
        <p className="description">{selectedItem.description}</p>
        <h1 className="heading">Requirements</h1>
        <p className="requirements">{selectedItem.requirements.content}</p>
        {selectedItem.requirements.items.map((item, index) => (
          <li className="req-items" key={index}>
            {item}
          </li>
        ))}
        <h1 className="heading">What you will do</h1>
        <p className="requirements">{selectedItem.role.content}</p>
        {selectedItem.role.items.map((item, index) => (
          <li className="req-items" key={index}>
            {item}
          </li>
        ))}
      </div>
    </main>
  );
};

export default PageContent;
