import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiFirebase,
  SiMongodb
} from "react-icons/si";
import { DiGit } from "react-icons/di";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Editor */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* API Tool */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      {/* Database Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>

      {/* Cloud / Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
};

export default Toolstack;
