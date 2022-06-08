export default function Footer() {
    return (
        <footer>
            <div id="map" className="container">
                <div className="row">
                    <div className="col-sm">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.6828313830315!2d-122.12123118446799!3d47.671157591509534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549072b01ec95071%3A0x7d577b0991adb2ad!2sEastside%20Dog%20and%20Cats%20Too!5e0!3m2!1sen!2sus!4v1654543208246!5m2!1sen!2sus" allowfullscreen="true"/>
                    </div>
                    <div className="col-sm">
                        <ul id="contact-info">
                            <li>
                                <a href="https://g.page/eastsidedog?share"><i class="bi bi-geo-alt-fill"/> 7533 166th Ave NE D130, Redmond, WA 98052</a>
                            </li>
                            <li>
                                <a href="tel:425-497-9487"><i class="bi bi-telephone-fill"/> (425)-497-9487</a>
                            </li>
                            <li>
                                <a href="mailto:eastsidedog@hanner.com"><i class="bi bi-envelope-fill"/> eastsidedog@hanner.com</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/eastsidedogRTC"><i class="bi bi-facebook"/> Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/eastsidedog/"><i class="bi bi-instagram"/> instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul id="open-time">
                            <li>
                                Monday - Saturday: 10:00am - 08:00pm
                            </li>
                            <li>
                                Sunday: 11:00am - 07:00pm
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
