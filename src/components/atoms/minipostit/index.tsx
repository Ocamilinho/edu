import Link from "next/link";
import React from "react";
import { FontTitleSpan, FundoPostIt } from "./style";

const MiniPostIt = (props) => {
  return (
    <Link href={props.link}>
  <FundoPostIt>
    <FontTitleSpan>{props.name}</FontTitleSpan>
    <FontTitleSpan>{props.abrevi}</FontTitleSpan>
  </FundoPostIt>
  </Link>
  );
};

export default MiniPostIt;
