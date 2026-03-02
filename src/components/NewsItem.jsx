const NewsItem = ({ article }) => {
  return (
    <div className="card h-100 shadow border-1 news-card">
      <img
        src={article.urlToImage}
        className="card-img-top"
        alt={article.title}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{article.title.slice(0, 50) + " ..."}</h6>
        <div className="details mb-2 d-flex gap-2">
          <span className="badge bg-secondary">
            {article.publishedAt.slice(0, 10).split("-").reverse().join("-")}
          </span>
          <span className="badge bg-secondary">
            {article.source.name.length > 20
              ? article.source.name.slice(0, 20) + " ..."
              : article.source.name}
          </span>
        </div>

        <p className="card-text text-muted small flex-grow-1">
          {article.description.slice(0, 100) + " ..."}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
