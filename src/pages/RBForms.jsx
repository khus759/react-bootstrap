import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function RBForms() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    address: "",
    sex: "",
    hobbies: [],
    resume: null,
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let msg = "";
    if (!value || value.length === 0) {
      msg = "This field is required";
    } else {
      if (field === "phone" && !/^[0-9]{10}$/.test(value)) {
        msg = "Enter a valid 10-digit phone number";
      }
      if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        msg = "Enter a valid email address";
      }
      if (field === "zip" && !/^[0-9]{5,6}$/.test(value)) {
        msg = "Enter a valid zip/pin code";
      }
    }
    setErrors((prev) => ({ ...prev, [field]: msg }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox" && name === "hobbies") {
      const updatedHobbies = checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter((h) => h !== value);
      setFormData((prev) => ({ ...prev, hobbies: updatedHobbies }));
      validate(name, updatedHobbies.length ? "ok" : "");
    } else if (type === "checkbox" && name === "terms") {
      setFormData((prev) => ({ ...prev, terms: checked }));
      validate(name, checked ? "ok" : "");
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
      validate(name, files.length ? "ok" : "");
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      validate(name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      if (
        (Array.isArray(value) && value.length === 0) ||
        (!Array.isArray(value) && !value)
      ) {
        validate(key, "");
        valid = false;
      }
    });

    if (valid) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <h4>Registration Details</h4>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First name</Form.Label>
          <Form.Control
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Country</Form.Label>
          <Form.Select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </Form.Select>
          {errors.country && <div className="text-danger">{errors.country}</div>}
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>State</Form.Label>
          <Form.Select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select state</option>
            <option value="Gujarat">Gujarat</option>
            <option value="California">California</option>
          </Form.Select>
          {errors.state && <div className="text-danger">{errors.state}</div>}
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Select
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select city</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Los Angeles">Los Angeles</option>
          </Form.Select>
          {errors.city && <div className="text-danger">{errors.city}</div>}
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Zip/Pin Code</Form.Label>
          <Form.Control
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
          {errors.zip && <div className="text-danger">{errors.zip}</div>}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <div className="text-danger">{errors.address}</div>}
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Sex</Form.Label>
          <div>
            <Form.Check
              inline
              label="Male"
              name="sex"
              type="radio"
              value="Male"
              checked={formData.sex === "Male"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Female"
              name="sex"
              type="radio"
              value="Female"
              checked={formData.sex === "Female"}
              onChange={handleChange}
            />
          </div>
          {errors.sex && <div className="text-danger">{errors.sex}</div>}
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Hobbies</Form.Label>
          <div>
            <Form.Check
              inline
              label="Drawing"
              name="hobbies"
              type="checkbox"
              value="Drawing"
              checked={formData.hobbies.includes("Drawing")}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Singing"
              name="hobbies"
              type="checkbox"
              value="Singing"
              checked={formData.hobbies.includes("Singing")}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Dancing"
              name="hobbies"
              type="checkbox"
              value="Dancing"
              checked={formData.hobbies.includes("Dancing")}
              onChange={handleChange}
            />
          </div>
          {errors.hobbies && <div className="text-danger">{errors.hobbies}</div>}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Resume</Form.Label>
        <Form.Control type="file" name="resume" onChange={handleChange} />
        {errors.resume && <div className="text-danger">{errors.resume}</div>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          name="terms"
          label="Agree to terms and conditions"
          checked={formData.terms}
          onChange={handleChange}
        />
        {errors.terms && <div className="text-danger">{errors.terms}</div>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit form
      </Button>
    </Form>
  );
}
