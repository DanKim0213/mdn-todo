import React from "react";

function FilterButton(props) {
  return (
    //
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name} </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

/**
 * aria-pressed 속성은 왜 넣었을까?
 * index.css 안에 스타일링 때문에
 * .btn.toggle-btn[aria-pressed="true"] { ... }
 *
 * Styled-components 를 쓰면 props에 따른 스타일링이 쉬웠다
 */

export default FilterButton;
