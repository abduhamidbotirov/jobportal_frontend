import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, Input } from "antd";
import "./Jobs.scss";
import { useEffect } from "react";

export const JobsNested = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const navigate = useNavigate();
  function navigation() {
    //* Automatically takes to route
    navigate("openpaused");
  }

  useEffect(() => {
    navigation();
  }, []);

  return (
    <div className="job-nested">
      <div className="job-nested__inner">
        <h1 className="job-nested__title">Jobs</h1>
        <Button className="jobsTalentButtons" onClick={showModal}>
          <FontAwesomeIcon
            className="icon"
            icon={faPlus}
            style={{ color: "#fff" }}
          />{" "}
          Create a job
        </Button>
        <Modal
          title="Create Job"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <Input id="jobTitle" />
          </div>
          <div>
            <label htmlFor="jobLocation">Job Location</label>
            <Input id="jobLocation" />
          </div>
          <div>
            <label htmlFor="jobDescription">Job Description</label>
            <Input.TextArea id="jobDescription" rows={4} />{" "}
          </div>
        </Modal>
      </div>
      {/* Tab router */}
      <div className="tab__router">
        <NavLink
          className="tab__links"
          to={"openpaused"}
          activeClassName="active"
        >
          <h3 className="tab__innerTitle">Open and Paused 1</h3>
        </NavLink>
        <NavLink
          className="tab__links"
          to={"archived"}
          activeClassName="active"
        >
          <h3 className="tab__innerTitle">Archived 0</h3>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
