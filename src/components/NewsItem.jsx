import './NewsItem.css';

const NewsItem = ({ article }) => {
  return (
    <div className="card h-100 shadow border-1 news-card">
      <img
        src={article.urlToImage || "https://placehold.co/600x400?text=No+Image"}
        className="card-img-top"
        alt={article.title || "News article"}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{article.title ? article.title.slice(0, 50) + " ..." : "Untitled"}</h6>
        <div className="details mb-2 d-flex gap-2">
          <span className="badge bg-secondary">
            {article.publishedAt ? article.publishedAt.slice(0, 10).split("-").reverse().join("-") : "Unknown date"}
          </span>
          <span className="badge bg-secondary">
            {article.source?.name
              ? article.source.name.length > 20
                ? article.source.name.slice(0, 20) + " ..."
                : article.source.name
              : "Unknown source"}
          </span>
        </div>

        <p className="card-text text-muted small flex-grow-1">
          {article.description ? article.description.slice(0, 100) + " ..." : "No description available."}
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
