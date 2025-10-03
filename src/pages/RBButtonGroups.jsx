import Button from 'react-bootstrap/Button';
import SectionHeading from '../components/SectionHeading';
import { ButtonGroup, Container } from 'react-bootstrap';
import { useState } from 'react';
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';

export default function RBButtonGroups() {
  const [alignment, setAlignment] = useState('left');

  const handleAlign = (value) => {
    setAlignment(value);
  };
    return (
        <>
            <Container>
                <SectionHeading
                    title="Buttons-Groups"
                    description="Group a series of buttons together on a single line or stack them in a vertical column."
                />


                <ButtonGroup className="mb-3">
                    <Button
                        variant={alignment === 'left' ? 'primary' : 'outline-primary'}
                        onClick={() => handleAlign('left')}
                    >
                        <AlignLeft size={16} className="me-1" />
                        Left
                    </Button>
                    <Button
                        variant={alignment === 'center' ? 'primary' : 'outline-primary'}
                        onClick={() => handleAlign('center')}
                    >
                        <AlignCenter size={16} className="me-1" />
                        Center
                    </Button>
                    <Button
                        variant={alignment === 'right' ? 'primary' : 'outline-primary'}
                        onClick={() => handleAlign('right')}
                    >
                        <AlignRight size={16} className="me-1" />
                        Right
                    </Button>
                </ButtonGroup>

                <div
                    className="border rounded p-3 bg-white"
                    style={{ textAlign: alignment }}
                >
                    <i>Here, the actions of the above buttons will be reflected.</i>
                </div>
            </Container>
        </>);
};