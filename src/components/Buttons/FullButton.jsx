import React from "react";
import styled from "styled-components";

export default function FullButton({
  title,
  action,
  border,
  contact,
  icon,
  style
}) {
  return (
    <a href="https://wa.me/+62882003112120">
      <Wrapper
        className="animate pointer radius8"
        onClick={action ? () => action() : null}
        border={border}
        style={style}
      >
        {title}
        {icon && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8
            }}
          >
            <img
              src={icon}
              alt="icon-btn"
              style={{ width: "18px", marginRight: 4 }}
            />
            {contact}
          </div>
        )}
      </Wrapper>
    </a>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;
