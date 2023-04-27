import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ChallengeOne } from "../ChallengeOne";
import { CAT_FACT } from "../../../fixtures/CatFactFixtures";

const INPUT_PLACEHOLDER_TEXT = "Ask me a question...";

describe("ChallengeOne", () => {
  it("should render the challenge title", () => {
    render(<ChallengeOne />);
    expect(screen.getByText("Challenge One")).toBeInTheDocument();
  });

  it("should render a text input for questions with the right placeholder", () => {
    render(<ChallengeOne />);

    const possibleInput = screen.getByPlaceholderText(INPUT_PLACEHOLDER_TEXT);
    expect(possibleInput.tagName).toEqual("INPUT");
  });

  it.skip("should update the question mirror as the user types", () => {
    render(<ChallengeOne />);

    const question = "What is 2 + 2?";
    const input = screen.getByPlaceholderText(INPUT_PLACEHOLDER_TEXT);

    fireEvent.change(input, { target: { value: question } });

    expect(input.value).toEqual(question);

    const questionMirror = screen.getByLabelText("question-mirror");

    expect(questionMirror).toHaveTextContent(question);
  });

  it.skip("should show a cat fact when the user clicks the submit button", async () => {
    render(<ChallengeOne />);

    const button = screen.getByLabelText("submit-button");

    fireEvent.click(button);

    const answer = screen.getByLabelText("answer");

    await waitFor(() => {
      return expect(answer.textContent).toEqual(CAT_FACT);
    });
  });

  it.skip("should clear the user's question when the clear button is clicked", () => {
    render(<ChallengeOne />);

    const question = "What is 2 + 2?";
    const input = screen.getByPlaceholderText(INPUT_PLACEHOLDER_TEXT);

    fireEvent.change(input, { target: { value: question } });

    const button = screen.getByLabelText("clear-button");

    fireEvent.click(button);

    expect(input.textContent).toEqual("");

    const questionMirror = screen.getByLabelText("question-mirror");

    expect(questionMirror.textContent).toEqual("");
  });
});
