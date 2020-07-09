import React, { useReducer } from "react";
import styled from "styled-components";
import { karmaReducer } from "../../functions/karmaReducer";
import { votePost, voteComment } from "../../functions/axios";

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpvoteButton = styled.span`
  color: ${({ voted }) => (voted ? "green" : "black")};
  font-size: 2em;
  cursor: pointer;
`;

const DownvoteButton = styled.span`
  color: ${({ voted }) => (voted ? "red" : "black")};
  font-size: 2em;
  cursor: pointer;
`;

const KarmaCounter = (props) => {
  const { userVoteDirection, votesCount, postId } = props;
  const [state, dispatch] = useReducer(karmaReducer, {
    userVoteDirection,
    votesCount,
  });

  const upvote = () => {
    dispatch({ type: "UPVOTE" });
    votePost(postId, userVoteDirection === 1 ? 0 : 1);
  };
  const downvote = () => {
    dispatch({ type: "DOWNVOTE" });
    votePost(postId, userVoteDirection === -1 ? 0 : -1);
  };

  return (
    <CounterWrapper>
      <UpvoteButton
        voted={state.userVoteDirection === 1 ? true : false}
        onClick={upvote}
      >
        +
      </UpvoteButton>
      <span style={{ fontSize: "1.5em" }}>{state.votesCount}</span>
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
