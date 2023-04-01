import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

 function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "1300px", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DB504A" }} className="text-black">
                    <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Check out Chicago <br />Go on a tour
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            See the sights
                    </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="   placeholder                                       ->" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
            <div >
                <img style={{ height: "428px", width: "100%", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="../images/chi_bears.jpg" alt="Chicago Bears" />
            </div>
            
        </div>
    )
}

export default Background;