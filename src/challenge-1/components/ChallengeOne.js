import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  font-size: 18px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 10px;
  }
`;

const QuestionMirror = styled.p`
  font-size: 20px;
`;

export const ChallengeOne = () => {
  return (
    <Wrapper>
      <h1>Challenge One</h1>
      <h7>aka non-functioning chat GPT</h7>
      <input placeholder="Ask me a question..." type="text" />
      <QuestionMirror aria-label="question-mirror">
        I should reflect whatever the user is typing...
      </QuestionMirror>
      <Buttons>
        <button aria-label="clear-button">Clear question</button>
        <button aria-label="submit-button">Ask your question</button>
      </Buttons>
      <p aria-label="answer">
        <strong>Answer goes here...</strong>
      </p>
    </Wrapper>
  );
};
