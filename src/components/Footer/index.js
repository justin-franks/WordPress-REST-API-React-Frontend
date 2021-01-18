import React from "react";
import { FooterLayout } from "./styles";

export const Footer = () => (
  <FooterLayout className="site-footer">
    <p className="site-info">{new Date().getFullYear()} | Co-OS </p>
    <p>
      <a href="https://github.com/CrowdWork/React-WordPress-REST-API-Sandbox.git">
        View this on Github
      </a>
    </p>
  </FooterLayout>
);
