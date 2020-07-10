import styled from "styled-components";

export const CounterWrapper = styled.div`
  width: 5%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 10px;
`;

export const UpvoteButton = styled.span`
  color: ${({ voted }) => (voted ? "#ff8b60" : "black")};
  font-size: 2em;
  cursor: pointer;
`;

export const DownvoteButton = styled.span`
  color: ${({ voted }) => (voted ? "#9494ff" : "black")};
  font-size: 2.5em;
  cursor: pointer;
  margin-top: -10px;
`;

export const VotesCount = styled.span`
  color: ${({ direction }) =>
    !direction ? "black" : direction === 1 ? "#ff8b60" : "#9494ff"};
  font-size: 1.4em;
`;
