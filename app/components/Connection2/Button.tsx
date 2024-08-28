import type { CSSProperties, FC, MouseEvent, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import styled from "styled-components";
const gold = "#A67C37";
const white = "#FEF6E6";


export const ContentBox = styled.div`
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  border : 1px solid ${(devries) => gold};
  transition: 3.5s;
  text-align: left;

  button{
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Montagu Slab', serif;
  font-style: italic;
  &:hover {
    background-color: darkblue;
  }
  }

h3 {
  text-align: left;
  font-size: 14px;
  color: ${(devries) => gold};
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Montagu Slab', serif;
  font-style: italic;
  width : 100px;
  display: inline; 
  margin:10;
}

h6 {
  text-align: left;
  font-size: 16px;
  color: ${(devries) => gold};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-family: 'Graduate', cursive;
  width : 100px;
  display: inline; 
  margin:5;
}
`;

export type ButtonProps = PropsWithChildren<{
    className?: string;
    disabled?: boolean;
    endIcon?: ReactElement;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    startIcon?: ReactElement;
    style?: CSSProperties;
    tabIndex?: number;
}>;

export const Button: FC<ButtonProps> = (props) => {
    return (
        <ContentBox>
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            tabIndex={props.tabIndex || 0}
        >
            {props.startIcon && <i>{props.startIcon}</i>}
            {props.children}
            {props.endIcon && <i>{props.endIcon}</i>}
        </button>
        </ContentBox>
    );
};
