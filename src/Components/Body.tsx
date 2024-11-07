import { useParams } from "react-router-dom";

const Body = () => {
  const params = useParams();
  console.log(params);
  return <div>This is the body</div>;
};

export default Body;
