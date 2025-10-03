import { Button, Spinner, Stack } from "react-bootstrap";
import React, { useState } from "react";


export default function RBSpinners() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
  };

  const handleCancel = () => {
    setSubmitting(false);
  };

  return (
    <div className="p-3">
      <h6>Default UI</h6>
      <Stack direction="horizontal" gap={2} className="mb-3">
        <Button variant="primary" onClick={handleSubmit}>
          Click to Submit
        </Button>
        <Button variant="danger" onClick={handleCancel}>
          Cancel
        </Button>
      </Stack>

      <h6>
        UI on clicking Submit button, here on clicking Cancel button, submit
        process will be stopped.
      </h6>
      <Stack direction="horizontal" gap={2}>
        <Button
          variant="primary"
          disabled={submitting}
          onClick={handleSubmit}
        >
          {submitting ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Submitting
            </>
          ) : (
            "Click to Submit"
          )}
        </Button>

        <Button variant="danger" onClick={handleCancel}>
          Cancel
        </Button>
      </Stack>
    </div>
  );
}
