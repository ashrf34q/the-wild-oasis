import toast from "react-hot-toast";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <button onClick={() => toast.loading("Loading Bookings")}>
        Click me
      </button>
      <p>TEST</p>
    </Row>
  );
}

export default Bookings;
