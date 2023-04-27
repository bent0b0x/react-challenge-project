import {
  fireEvent,
  getByLabelText,
  render,
  screen,
} from "@testing-library/react";
import { ChallengeOne } from "../ChallengeOne";

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
});
