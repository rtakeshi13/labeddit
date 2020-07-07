import React from "react";
import { useHistory } from "react-router-dom";

const CommentCard = (props) => {
  const history = useHistory();
  return (
    <div>
        <p>{props.userName}</p>
        <p>{props.text}</p>
        <div>
            <button>seta pra cima</button>
            <p>{props.votesCount}</p>
            <button>seta pra baixo</button>
        </div>
      
    </div>
  );
};

export default CommentCard;
