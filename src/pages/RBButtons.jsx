import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SectionHeading from '../components/SectionHeading';
import { Container } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Pencil } from 'react-bootstrap-icons';

function RBButtons() {
    const [formats, setFormats] = useState([]);

    const handleChange = (val) => setFormats(val);

    const style = {
        fontWeight: formats.includes('bold') ? 'bold' : 'normal',
        fontStyle: formats.includes('italic') ? 'italic' : 'normal',
        textDecoration: formats.includes('underline') ? 'underline' : 'none',
    };

    return (
        <Container>
            <SectionHeading
                title="Buttons"
                description="Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
            />

            <h2>Button Styles</h2>
            <div className="d-flex gap-2">
                <Button variant="primary">Normal Button</Button>
                <Button variant="primary">
                    <Pencil size={20} className="me-2" />
                    Edit Record
                </Button>
                <Button variant="outline-primary">Outline Button</Button>
                <Button variant="primary" disabled>
                    Disabled Button
                </Button>
            </div>

            <h2 className="mt-5">Button Types</h2>
            <div className="d-flex gap-2">
                <Button
                    variant="link"
                    className="bg-primary text-white text-decoration-none"
                    href="#"
                >
                    Link
                </Button>
                <Button type="submit">Button</Button>
                <Button as="input" type="button" value="Input" />
                <Button as="input" type="submit" value="Submit" />
                <Button as="input" type="reset" value="Reset" />
            </div>

            <h2 className="mt-5">Toggle Buttons</h2>
            <ToggleButtonGroup
                type="checkbox"
                value={formats}
                onChange={handleChange}
            >
                <ToggleButton id="bold-btn" value="bold" variant="outline-primary">
                    <strong>B</strong>
                </ToggleButton>
                <ToggleButton id="italic-btn" value="italic" variant="outline-primary">
                    <em>I</em>
                </ToggleButton>
                <ToggleButton id="underline-btn" value="underline" variant="outline-primary">
                    <u>U</u>
                </ToggleButton>
                <ToggleButton
                    id="reset-btn"
                    value="reset"
                    variant="outline-primary"
                    onClick={() => setFormats([])}
                >
                    ⟲
                </ToggleButton>
            </ToggleButtonGroup>

            <p style={{ marginTop: '20px', ...style }}>
                Here, the actions of the above buttons will be reflected.
            </p>
        </Container>
    );
}

export default RBButtons;
