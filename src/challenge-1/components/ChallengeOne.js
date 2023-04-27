import { useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  flex-direction: column;
`;

const QuestionMirror = styled.p``;

export const ChallengeOne = () => {
  const handleInputChange = useCallback(() => {}, []);

  return (
    <Wrapper>
      <input
        onChange={handleInputChange}
        placeholder="Ask me a question..."
        type="text"
      />
      <QuestionMirror>
        I should reflect whatever the user is typing...
      </QuestionMirror>
    </Wrapper>
  );
};
