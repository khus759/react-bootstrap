import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Row, Col, Button } from "react-bootstrap";

export default function RBFormYup() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),

    lastName: Yup.string().required("Last name is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
      .required("Phone number is required"),

    email: Yup.string()
      .email("Enter a valid email")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
      .required("Email is required"),

    country: Yup.string().required("Country is required"),

    state: Yup.string().required("State is required"),

    city: Yup.string().required("City is required"),

    zip: Yup.string()
      .matches(/^[0-9]{5,6}$/, "Enter a valid zip code")
      .required("Zip code is required"),

    address: Yup.string().required("Address is required"),

    sex: Yup.string().required("Please select your gender"),

    hobbies: Yup.array().min(1, "Select at least one hobby"),
    
    resume: Yup.mixed()
      .required("Resume is required")
      .test("fileType", "Only JPG, PNG, or WEBP files are allowed", (value) => {
        return (
          value &&
          ["image/jpeg", "image/png", "image/webp"].includes(value.type)
        );
      })
      .test("fileSize", "File size should be less than 2MB", (value) => {
        return value && value.size <= 2 * 1024 * 1024;
      }),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the terms")
      .required(),
  });

  const initialValues = {
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
  };

  // Submit handler
  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className="p-3">
          <h4>Registration Details</h4>

          <Row className="mb-3">
            <Col>
              <label>First Name</label>
              <Field name="firstName" className="form-control" />
              <ErrorMessage name="firstName" component="div" className="text-danger" />
            </Col>
            <Col>
              <label>Last Name</label>
              <Field name="lastName" className="form-control" />
              <ErrorMessage name="lastName" component="div" className="text-danger" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <label>Phone Number</label>
              <Field name="phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </Col>
            <Col>
              <label>Email</label>
              <Field name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <label>Country</label>
              <Field as="select" name="country" className="form-select">
                <option value="">Select country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </Field>
              <ErrorMessage name="country" component="div" className="text-danger" />
            </Col>
            <Col>
              <label>State</label>
              <Field as="select" name="state" className="form-select">
                <option value="">Select state</option>
                <option value="Gujarat">Gujarat</option>
                <option value="California">California</option>
              </Field>
              <ErrorMessage name="state" component="div" className="text-danger" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <label>City</label>
              <Field as="select" name="city" className="form-select">
                <option value="">Select city</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Los Angeles">Los Angeles</option>
              </Field>
              <ErrorMessage name="city" component="div" className="text-danger" />
            </Col>
            <Col>
              <label>Zip</label>
              <Field name="zip" className="form-control" />
              <ErrorMessage name="zip" component="div" className="text-danger" />
            </Col>
          </Row>

          <div className="mb-3">
            <label>Address</label>
            <Field as="textarea" rows="2" name="address" className="form-control" />
            <ErrorMessage name="address" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label>Sex</label>
            <div>
              <label className="me-2">
                <Field type="radio" name="sex" value="Male" /> Male
              </label>
              <label>
                <Field type="radio" name="sex" value="Female" /> Female
              </label>
            </div>
            <ErrorMessage name="sex" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label>Hobbies</label>
            <div>
              <label className="me-2">
                <Field type="checkbox" name="hobbies" value="Drawing" /> Drawing
              </label>
              <label className="me-2">
                <Field type="checkbox" name="hobbies" value="Singing" /> Singing
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="Dancing" /> Dancing
              </label>
            </div>
            <ErrorMessage name="hobbies" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label>Resume</label>
            <input
              type="file"
              className="form-control"
              onChange={(event) => setFieldValue("resume", event.target.files[0])}
            />
            <ErrorMessage name="resume" component="div" className="text-danger" />
          </div>

          {/* Terms */}
          <div className="mb-3">
            <label>
              <Field type="checkbox" name="terms" /> I agree to the terms
            </label>
            <ErrorMessage name="terms" component="div" className="text-danger" />
          </div>

          {/* Submit */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}