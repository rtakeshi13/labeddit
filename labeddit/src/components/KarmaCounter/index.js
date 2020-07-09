import React, { useReducer } from "react";
import styled from "styled-components";
import { karmaReducer } from "../../functions/karmaReducer";
import { votePost, voteComment } from "../../functions/axios";

const CounterWrapper = styled.div`
  width: 5%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 10px;
`;

const UpvoteButton = styled.span`
  color: ${({ voted }) => (voted ? "#ff8b60" : "black")};
  font-size: 2em;
  cursor: pointer;
`;

const DownvoteButton = styled.span`
  color: ${({ voted }) => (voted ? "#9494ff" : "black")};
  font-size: 2em;
  cursor: pointer;
  margin-top: -5px;
`;

const VotesCount = styled.span`
  color: ${({ direction }) =>
    !direction ? "black" : direction === 1 ? "#ff8b60" : "#9494ff"};
  font-size: 1.4em;
`;

const KarmaCounter = (props) => {
  const { userVoteDirection, votesCount, postId, commentId } = props;
  const [state, dispatch] = useReducer(karmaReducer, {
    userVoteDirection,
    votesCount,
  });

  const upvote = () => {
    dispatch({ type: "UPVOTE" });
    if (commentId) {
      voteComment(postId, commentId, userVoteDirection === 1 ? 0 : 1);
    } else {
      votePost(postId, userVoteDirection === 1 ? 0 : 1);
    }
  };
  const downvote = () => {
    dispatch({ type: "DOWNVOTE" });
    if (commentId) {
      voteComment(postId, commentId, userVoteDirection === -1 ? 0 : -1);
    } else {
      votePost(postId, userVoteDirection === -1 ? 0 : -1);
    }
  };

  return (
    <CounterWrapper>
      <UpvoteButton
        voted={state.userVoteDirection === 1 ? true : false}
        onClick={upvote}
      >
        +
      </UpvoteButton>
      <VotesCount direction={state.userVoteDirection}>
        {state.votesCount}
      </VotesCount>
      <DownvoteButton
        voted={state.userVoteDirection === -1 ? true : false}
        onClick={downvote}
      >
        -
      </DownvoteButton>
    </CounterWrapper>
  );
};

export default KarmaCounter;
