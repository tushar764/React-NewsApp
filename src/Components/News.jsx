import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const updateNews = async () => {
    props.setProgress(10);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Imp News Headlines`;

    updateNews(); 
    // eslint-disable-next-line
  }, [props.category]);

  const fetchMoreData = async () => {
    if (loading) return;
    try {
      const nextPage = Math.ceil(articles.length / props.pageSize) + 1;
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${nextPage}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching more data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Added top margin using mt-5 */}
      <h1 className="text-center my-3 mt-5">
        Top Headlines From {capitalizeFirstLetter(props.category)}
      </h1>
      
      {loading && articles.length === 0 && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles
              .filter((element) => element && element.title)
              .map((element) => (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={
                      element.title ? element.title.slice(0, 45) : "No Title"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "No Description"
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://cdn.pixabay.com/photo/2014/10/14/20/24/football-488714_1280.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author || "Unknown"}
                    date={element.publishedAt || "Unknown Date"}
                    source={element.source?.name || "Unknown Source"}
                  />
                </div>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};
export default News;
