import React from 'react';

const Newsitem =(props)=> {


    // Destructure title and description from props
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    // If title or description is not passed, set default values
    title = title || 'Default Title';
    description = description || 'Default description text here.';

    return (
      <div className="my-3">
        <div className="card" style={{ position: 'relative' }}>
          <img 
            src={!imageUrl ? "https://cdn.pixabay.com/photo/2014/10/14/20/24/football-488714_1280.jpg" : imageUrl} 
            className="card-img-top" 
            alt="Card image" 
            style={{ width: '100%', height: 'auto' }} // Make image responsive
          />

          {/* Badge for the source */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '10px',
              top: '10px',
              zIndex: '1',
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
