import React, { useReducer } from "react";
import styled from "styled-components";
import { karmaReducer } from "../../functions/karmaReducer";
import { votePost, voteComment } from "../../functions/axios";

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 10px;
`;

const UpvoteButton = styled.span`
  color: ${({ voted }) => (voted ? "green" : "black")};
  font-size: 2em;
  cursor: pointer;
`;

const DownvoteButton = styled.span`
  color: ${({ voted }) => (voted ? "red" : "black")};
  font-size: 2.5em;
  cursor: pointer;
  margin-top: -10px;
  margin-left: 0px;
`;

const VotesCount = styled.span`
  font-size: 1.4em;
  margin-left: 2px;
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
      <VotesCount>{state.votesCount}</VotesCount>
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
