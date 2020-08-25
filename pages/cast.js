import axios from "axios";

const castMemberDetails = ({ person }) => {
  return <h1>{JSON.stringify(person)}</h1>;
};

castMemberDetails.getInitialProps = async ({ query }) => {
  const { personId } = query;
  const response = await axios.get(`http://api.tvmaze.com/people/${personId}`);

  return {
    person: response.data,
  };
};

export default castMemberDetails;
