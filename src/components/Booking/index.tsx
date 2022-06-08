import { Container, SectionHeader, FormGroup,FormGroupDestiny,CarType } from "./styles"

export default function Booking() {
    return (
        <Container>
                    <SectionHeader>
                        <h6>Choose your car</h6>
                        <h3><b>book taxi</b> now</h3>
                    </SectionHeader>
                    <form className={"row"}>
                        <FormGroup>
                            <label>Name</label>
                            <input type="text" placeholder="Enter your phone number..." className={"form_control"}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Phone number</label>
                            <input type="text" placeholder="+(01) xxx - xxx - xx" className={"form_control"}/>
                        </FormGroup>
                        <FormGroup>
                            <label>From</label>
                            <input type="text" placeholder="Starting palce" className={"form_control"}/>
                        </FormGroup>
                        <FormGroupDestiny>
                            <label>to</label>
                            <input type="text" placeholder="Destination" className={"form_control"}/>
                            <span>-</span>
                            <input type="text" placeholder="HH" className={"form_control time"}/>
                            <span>:</span>
                            <input type="text" placeholder="MM" className={"form_control time"}/>
                        </FormGroupDestiny>
                        <FormGroup>
                            <label>Passenger</label>
                            <input type="text" placeholder="3" className={"form_control"} />
                        </FormGroup>
                        <FormGroup>
                            <label>CLASS</label>
                            <select className={"form_control"}>
                                <option>Business</option>
                                <option>First</option>
                                <option>Second</option>
                                <option>Third</option>
                            </select>
                        </FormGroup>
                        <CarType>
                            <label>car type</label>
                            <span>Convertible <input type="checkbox" /></span>
                            <span>Vans <input type="checkbox" /></span>
                            <span>Luxury <input type="checkbox" /></span>
                            <span>Cars <input type="checkbox" /></span>
                            <span><input type="submit" value="BOOK YOUR TRIP" /></span>
                        </CarType>
                    </form>
        </Container>
    )
}