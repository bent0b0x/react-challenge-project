import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  flex-direction: column;
`;

export const ChallengeOne = () => {
  return (
    <Wrapper>
      <h1>Challenge One</h1>
      <input placeholder="Ask me a question..." type="text" />
      <p aria-label="question-mirror">
        I should reflect whatever the user is typing...
      </p>
    </Wrapper>
  );
};
