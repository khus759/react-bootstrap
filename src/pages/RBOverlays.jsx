import { Button, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";

export default function RBOverlays() {
  const popover = (
    <Popover id="popover-basic" >
      <Popover.Header as="h3">Popover bottom</Popover.Header>
      <Popover.Body>
        <strong>Holy guacamole!</strong> Check this info.
      </Popover.Body>
    </Popover>
  );

  const renderTooltip = (props, text) => (
    <Tooltip {...props}>{text}</Tooltip>
  );

  return (
    <div>
      <div className="mb-4 d-flex gap-2 pt-5 pb-3">
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button variant="outline-secondary">Popover on top</Button>
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="outline-secondary">Popover on right</Button>
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="outline-secondary">Popover on bottom</Button>
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
          <Button variant="outline-secondary">Popover on left</Button>
        </OverlayTrigger>
      </div>

      <hr />

      {/* Tooltips */}
      <div className="d-flex gap-2">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Tooltip on top.")}
        >
          <Button variant="secondary">Tooltip on top</Button>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={(props) => renderTooltip(props, "Tooltip on right")}
        >
          <Button variant="secondary">Tooltip on right</Button>
        </OverlayTrigger>

        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "Tooltip on bottom")}
        >
          <Button variant="secondary">Tooltip on bottom</Button>
        </OverlayTrigger>

        <OverlayTrigger
          placement="left"
          overlay={(props) => renderTooltip(props, "Tooltip on left")}
        >
          <Button variant="secondary">Tooltip on left</Button>
        </OverlayTrigger>
      </div>
    </div>
  );
}
