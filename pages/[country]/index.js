import axios from "axios";
import CustomError from "../_error";
import Thumbnail from "../../components/Thumbnail/index";

const Home = ({ shows, country, statusCode }) => {
  if (statusCode) {
    return <CustomError statusCode={statusCode} />;
  }
  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem;

      return (
        <li key={index}>
          <Thumbnail
            imageUrl={show.image?.medium || undefined}
            caption={show.name}
            href="/[country]/[showId]"
            as={`/${country}/${show.id}`}
          />
        </li>
      );
    });
  };

  return (
    <div>
      <ul className="tvshows-grid">
        {renderShows()}
        <style jsx>
          {`
            .tvshows-grid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              text-align: center;
              gap:10px
              margin-bottom: 10px;
              color: white;
            }
          `}
        </style>
      </ul>
    </div>
  );
};

Home.getInitialProps = async (context) => {
  try {
    const country = context.query.country || "us";
    const response = await axios.get(
      `https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
    );

    return {
      shows: response.data,
      country: country,
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
    };
  }
};

export default Home;
