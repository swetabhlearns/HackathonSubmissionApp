import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavBar from "../components/NavBar";
import DataContext from "../DataContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const SubmissionForm = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { setFilterData, filterData, setItemData } = useContext(DataContext);
  const navigate = useNavigate();
  const id = uuidv4();
  const setField = (field, value) => {
    setForm({
      ...form,
      id: id,
      [field]: value,
    });
    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const validateForm = () => {
    const { title, summary, description, startDate, endDate, github, other } =
      form;
    const newErrors = {};
    if (!title || title === "") {
      newErrors.title = "Please Enter A Title";
    }
    if (!summary || summary === "") {
      newErrors.summary = "Please Enter A summary";
    }
    if (!description || description === "") {
      newErrors.description = "Description is too short";
    }
    if (!startDate || startDate === "") {
      newErrors.startDate = "Please Enter A startDate";
    }
    if (!endDate || endDate === "") {
      newErrors.endDate = "Please Enter A endDate";
    }
    if (!github || github === "") {
      newErrors.github = "Please Enter A Github Link";
    }

    return newErrors;
  };

  const handleFormClick = (e) => {
    console.log(id);
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setFilterData([...filterData, form]);
      setItemData([...filterData, form]);

      navigate("/");
    }
  };
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(
        "image",
        event.target.value,
        `${URL.createObjectURL(event.target.files[0])}`
      );
    }
    setField("image", `${URL.createObjectURL(event.target.files[0])}`);
  };
  return (
    <div className="submissionForm">
      <NavBar />
      <div className="submissionFormHeader">New Hackathon Submission</div>
      <Form className="submissionFormContainer">
        <Form.Group className="mb-3" controlId="inputFormTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title of your submission"
            value={form.title}
            onChange={(e) => {
              setField("title", e.target.value);
            }}
            isInvalid={!!errors.title}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputFormSummary">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            type="text"
            placeholder="A short summary of your submission (this will be visible with your submission)"
            value={form.summary}
            onChange={(e) => setField("summary", e.target.value)}
            isInvalid={!!errors.summary}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.summary}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="inputFormDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            value={form.description}
            onChange={(e) => {
              setField("description", e.target.value);
            }}
            isInvalid={!!errors.description}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.description}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            onChange={handleImageChange}
            isInvalid={!!errors.image}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.image}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Minimum resolution: 360px X 360px
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputFormHackathonName">
          <Form.Label>Hackathon Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
            value={form.hackathonName}
            onChange={(e) => setField("hackathonName", e.target.value)}
            isInvalid={!!errors.hackathonName}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.hackathonName}
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStartDate">
            <Form.Label>Select start Date</Form.Label>
            <Form.Control
              type="date"
              value={form.startDate}
              onChange={(e) => setField("startDate", e.target.value)}
              isInvalid={!!errors.startDate}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.startDate}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEndDate">
            <Form.Label>Select end Date</Form.Label>
            <Form.Control
              type="date"
              value={form.endDate}
              onChange={(e) => setField("endDate", e.target.value)}
              isInvalid={!!errors.endDate}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.endDate}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="inputFormGithubLink">
          <Form.Label>Github Repository</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter your submission’s public GitHub repository link"
            value={form.github}
            onChange={(e) => setField("github", e.target.value)}
            isInvalid={!!errors.github}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.github}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputFormOtherLink">
          <Form.Label>Other Links</Form.Label>
          <Form.Control
            type="url"
            placeholder="You can upload a video demo or URL of you demo app here."
            value={form.other}
            onChange={(e) => setField("other", e.target.value)}
            isInvalid={!!errors.other}
          />
          <Form.Control.Feedback type="invalid">
            {errors.other}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="primary"
          className="pt-8 pr-8"
          type="submit"
          onClick={handleFormClick}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SubmissionForm;
