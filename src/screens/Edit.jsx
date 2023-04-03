import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavBar from "../components/NavBar";
import DataContext from "../DataContext";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const { details, filterData, setFilterData, setItemData } =
    useContext(DataContext);
  const [form, setForm] = useState({
    title: details[0].title,
    summary: details[0].summary,
    description: details[0].description,
    startDate: details[0].startDate,
    endDate: details[0].endDate,
    github: details[0].github,
    other: details[0].other,
    hackathonName: details[0].hackathonName,
  });
  const [errors, setErrors] = useState({});
  const [title, setTitle] = useState(details[0].title);
  const [summary, setSummary] = useState(details[0].summary);
  const [description, setDescription] = useState(details[0].description);
  const [startDate, setStartDate] = useState(details[0].startDate);
  const [endDate, setEndDate] = useState(details[0].endDate);
  const [github, setGithub] = useState(details[0].github);
  const [other, setOther] = useState(details[0].other);
  const [hackathonName, setHackathonName] = useState(details[0].hackathonName);

  const navigate = useNavigate();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };
  const validateForm = () => {
    const { title, summary, description, startDate, endDate, github, other } =
      form;
    console.log("----", title, summary, form);
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
  const handleFormClick = (id) => (e) => {
    console.log(title, summary);
    let idx = id;
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form Submitted", form);
      let index = filterData.map((e) => e.id).indexOf(id);
      let editData = [...filterData];
      editData[index] = form;
      editData[index].id = idx;
      setFilterData(editData);
      setItemData(editData);
      navigate("/", { replace: true });
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
      <div className="submissionFormHeader">Edit Hackathon Submission</div>
      <Form className="submissionFormContainer">
        <Form.Group className="mb-3" controlId="inputFormTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Normal text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
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
            placeholder="Normal text"
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
              setField("summary", e.target.value);
            }}
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
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
            placeholder="Normal text"
            value={hackathonName}
            onChange={(e) => {
              setHackathonName(e.target.value);
              setField("hackathonName", e.target.value);
            }}
            isInvalid={!!errors.hackathonName}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.hackathonName}
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStartDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                setField("startDate", e.target.value);
              }}
              isInvalid={!!errors.startDate}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.startDate}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEndDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setField("endDate", e.target.value);
              }}
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
            placeholder="Normal text"
            value={github}
            onChange={(e) => {
              setGithub(e.target.value);
              setField("github", e.target.value);
            }}
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
            placeholder="Normal text"
            value={other}
            onChange={(e) => {
              setOther(e.target.value);
              setField("other", e.target.value);
            }}
            isInvalid={!!errors.other}
          />
          <Form.Control.Feedback type="invalid">
            {errors.other}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleFormClick(details[0].id)}
        >
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
