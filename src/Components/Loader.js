import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((state) => state.isLoading);
  return <>{isLoading ? <Spinner animation="grow" /> : null}</>;
};

export default Loader;
