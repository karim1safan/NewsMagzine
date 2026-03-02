import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  // pagination
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [category]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${category}&pageSize=12&page=${page}&apiKey=${API_KEY}`,
        );
        const data = await response.json();

        setArticles(data.articles);
      } catch (error) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page, category]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-danger" role="status" />
        </div>
      ) : error ? (
        <p className="text-center text-danger h3">{error}</p>
      ) : (
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
              <NewsItem article={article} />
            </div>
          ))}
        </div>
      )}
      <div className="d-flex justify-content-center mt-5">
        {!loading && articles.length > 0 && (
          <nav>
            <ul className="pagination">
              {/* Previous */}
              <li className="page-item">
                <button
                  className={`page-link ${page === 1 ? "disabled" : ""}`}
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  &laquo;
                </button>
              </li>

              {/* Numbers */}
              {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
                <li
                  key={number}
                  className={`page-item ${page === number ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => setPage(number)}>
                    {number}
                  </button>
                </li>
              ))}

              {/* Next */}
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => setPage(page + 1)}
                  disabled={page === articles.length / 12} // Assuming 12 articles per page
                >
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
