import { Card } from "react-bootstrap-v5";
import Avatar from "./Avatar";

const CommentCard = ({ comment }) => {
  return (
    <Card className="testimonial4_slide">
      <Card.Title>
        <Avatar
          src={
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
          }
          className="img-circle img-responsive"
          width={30}
          height={30}
          alt={"louis"}
        />
        <small className="mt-3">Louis Gadza</small>
      </Card.Title>
      <Card.Text>
        <small>
          Matches involving two participants (either two players or two teams)
          require a structure using duel-based stages such as single or double
          elimination, gauntlet, round-robin or swiss system.
        </small>
      </Card.Text>
    </Card>
  );
};
export default CommentCard;
