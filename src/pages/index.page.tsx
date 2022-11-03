import { ToolBar } from "../components/bars"
import Booking from "../components/Booking"
import Footer from "../components/Footer"
import Services from "../components/Services"
import Tarifs from "../components/Tarifs"

import { Container } from "./styles"

export default function Home() {
    return (
        <Container>
            <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3307935048997010"
                     crossOrigin="anonymous">
                </script>
            </head>
            <div className="header">
                <ToolBar/>
            </div>
            <main>
                <Services />
                <Booking/>
                <Tarifs/>
            </main>
            <Footer/>
        </Container>
    )
}