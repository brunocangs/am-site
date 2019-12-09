import React from "react";
import { Banner } from "../components/Header";
import { BaseContainer } from "../components/ProjectComponents";

export default props => {
  const { language } = props.pageContext;
  const isEn = language === "en";
  return (
    <div style={{ width: "100%" }}>
      <Banner title={isEn ? "Thank you" : "Obrigado"} />
      <BaseContainer>
        <p style={{ marginTop: 60, fontWeight: 300 }}>
          {isEn
            ? "We have received your message and will get back to you as soon as possible"
            : "Recebemos sua mensagem e entraremos em contato assim que possível."}
        </p>
      </BaseContainer>
    </div>
  );
};
