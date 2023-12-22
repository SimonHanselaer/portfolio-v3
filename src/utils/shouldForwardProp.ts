import isPropValid from "@emotion/is-prop-valid";

// This implements the default behavior from styled-components v5
export function shouldForwardProp(propName: string, target: any) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}
