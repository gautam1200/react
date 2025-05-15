import { useState } from 'react';
import { Card, Collapse, Fade, Ratio } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Im from './Im.jpg'

function Offff({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas> */}

            <br /><br />
            {/* <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                click
            </Button>
            <div style={{ minHeight: '10px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        <Card body style={{ width: '400px' }}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </Card>
                    </div>
                </Collapse>
            </div> */}
            <br /><br />

            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
            >
                Toggle text
            </Button>
            <Fade in={open}>
                <div id="example-fade-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Fade>

            <br /><br />
{/* 
            <div style={{ width: 600, height: 'auto' }}>
      <Ratio aspectRatio="16x9">
        <embed type="image/svg+xml" src={Im} />
      </Ratio>
            
        </div > */}
        <br /><br /><br />

            {['1x1', '4x3', '16x9', '21x9'].map((ratio) => (
                <Ratio key={ratio} aspectRatio={ratio}>
                    <div>{ratio}</div>
                </Ratio>
            ))}

            <Ratio aspectRatio={1 / 2}>
        <div>2x1</div>
      </Ratio>
      <Ratio aspectRatio={50}>
        <div>2x1</div>
      </Ratio>
        </>
    );
}
export default Offff
