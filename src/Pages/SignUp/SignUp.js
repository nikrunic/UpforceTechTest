import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { SignUpForm } from "../../Components/SignUpForm";
import "./SignUp.scss";

export const SignUp = () => {
  const [tabKey, setTabKey] = useState("talent");
  return (
    <div className="sign-up d-md-flex">
      <div className="sign-up-container">
        <div className="sign-up-container-box">
          <Tabs
            id="controlled-tab-example"
            activeKey={tabKey}
            onSelect={(selectedTab) => setTabKey(selectedTab)}
            className="mb-0"
          >
            <Tab eventKey="fan" title="Fan Signup">
              <SignUpForm tabKey={tabKey} />
            </Tab>
            <Tab eventKey="talent" title="Talent Signup">
              <SignUpForm tabKey={tabKey} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
