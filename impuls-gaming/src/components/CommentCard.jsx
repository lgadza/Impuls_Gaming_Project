import { useRef, useState } from "react";
import { Card, Form, Spinner } from "react-bootstrap-v5";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";
import * as Icon from "react-bootstrap-icons";
import { editComment, getComments, deleteComment } from "../redux/actions";
import { Link } from "react-router-dom";

const CommentCard = ({ comment, user, token }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.reservationsComments.isLoading
  );
  const [commentText, setCommentText] = useState(comment.comment);
  const [isPut, setIsPut] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const updateComment = async () => {
    setIsPut(true);
    await dispatch(editComment(token, comment._id, { comment: commentText }));
    dispatch(getComments(token));
  };
  const textareaRef = useRef(null);
  const handleTextAreaFocus = () => {
    const textarea = textareaRef.current;
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  };
  return (
    <Card className="testimonial4_slide p-0">
      <Card.Header>
        <Avatar
          src={comment.user.avatar}
          className="img-circle img-responsive"
          width={30}
          height={30}
          alt={comment.user.name}
        />
        <small className="mt-3">
          {comment.user.name} {comment.user.surname}
        </small>
      </Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-between py-0  align-items-center">
          <Form.Group className=" w-100  nickname-text-bar mt-2 ">
            <Form.Control
              // type="text"
              as="textarea"
              disabled={user ? user._id !== comment.user._id : true}
              ref={textareaRef}
              rows={6}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="p-1"
            />
          </Form.Group>
          {user && (
            <>
              {user._id === comment.user._id && (
                <>
                  {isLoading && isPut && <Spinner animation="grow" size="sm" />}
                  {!isEditing && (
                    <>
                      <Link className="bg-dark rounded-circle">
                        <Icon.PencilFill
                          onClick={() => {
                            setIsEditing(true);
                            handleTextAreaFocus();
                          }}
                          size={20}
                          className="m-0  p-1"
                        />
                      </Link>
                      <Link className="bg-dark ml-1 rounded-circle">
                        <Icon.Trash
                          onClick={async () => {
                            await dispatch(deleteComment(token, comment._id));
                            dispatch(getComments(token));
                          }}
                          size={20}
                          className="m-0  p-1"
                        />
                      </Link>
                    </>
                  )}
                  {isEditing && (
                    <Link className="d-flex ml-1 bg-dark rounded-circle align-items-center">
                      {/* <span>{commentText.length}</span> */}

                      <Icon.Check2
                        onClick={() => {
                          setIsEditing(false);
                          updateComment();
                        }}
                        className="m-0  p-1"
                        size={20}
                      />
                    </Link>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default CommentCard;
