import { Container } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Layout = ({ children }: IProps) => {
  return <Container maxWidth="lg">{children}</Container>;
};
