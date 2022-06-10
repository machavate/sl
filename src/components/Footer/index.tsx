import { Container, Row, Width } from "./styles"

export default function Footer() {
    return (
        <Container>
            <Row>  
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-ms-6">
                    <h4>About us</h4>
                    <p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. </p>

                    <div className="social-small social-yellow">
                        <a href="" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-google-plus"></a>
                        <a href="#" className="fa fa-pinterest"></a>
                    </div>
                    </div>
                <div className="col-lg-5 col-md-5 hidden-md hidden-sm hidden-xs hidden-ms">
                    <h4>Explore</h4>
                    <div className="row">
                        <div className="col-md-5">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Get Taxi</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Tariffs</a></li>
                                <li><a href="#">Application</a></li>

                            </ul>
                        </div>
                        <div className="col-md-5">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Become a driver</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Pages</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
        
                    <h4>Contact us</h4>
                    <p><span className="yellow">Address:</span> 43 2-nd Avenue,  New York, NY 29004-7153</p>

                    <ul className="address">
                        <li><span className="fa fa-phone"></span>800-5-800</li>
                        <li><span className="fa fa-envelope"></span><a href="#">gettaxi@taxipark.co.uk</a></li>
                        <li><span className="fa fa-skype"></span>gettaxipark</li>
                    </ul>
                    <footer>
                        <div className="container">
                            <a href="">Like-themes</a> 2017 © All Rights Reserved <a href="#">Terms of use</a>
                            <a href="" className="go-top hidden-xs hidden-ms"></a>
                        </div>
                    </footer>
                    </Row>
                </Container>
                ) 
}