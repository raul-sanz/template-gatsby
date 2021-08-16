import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const RouterItem = styled(Link).attrs((props) => ({
  className:
    "bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400 hover:text-white p-2 w-full flex",
}))``;

export default RouterItem;
