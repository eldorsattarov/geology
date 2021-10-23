import styled from "react-emotion";

function createButton(tag) {
    const Button = styled(tag)`
    &&& {
      -webkit-appearance: none;
      -moz-appearance: none;
      padding: 0;
      margin: 0;
      border: none;
      background: none;
      outline: none;

      box-sizing: border-box;
      border: 2px solid #ffde00;
      padding: 0.675rem 1rem;
      border-radius: 5px;
      min-width: 160px;
      font-weight: bold;
      font-family: ProximaNova, sans-serif;
      font-size: 1rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-height: 2.75rem;
      margin-top: ${props => props.standardMargin && "1rem"};
      margin-bottom: ${props => props.standardMargin && "1.25rem"};

      color: ${props => (props.white ? "#FFF" : "#222")};
      background-color: ${props => (props.ghost ? "transparent" : "#ffde00")};

      transition-property: color, background-color, border-color;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      user-select: none;
      text-decoration: none;
    }

    &&&&:focus {
      border-color: #b2991f;
      outline: none;
    }

    &&&&:hover {
      color: white;
      background-color: #236093;
      border-color: #236093;
    }

    &&&&[disabled] {
      border-color: #c9c9c9;
      background-color: #c9c9c9;
      color: #6f6f6f;
    }
  `;

    if (tag === "button") {
        Button.defaultProps = {
            type: "button"
        };
    }

    return Button;
}

export const Button = createButton("button");
export const Link = createButton("a");

export default Button;