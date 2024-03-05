// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ArrowLink from "@/components/ui/arrowLink";
import Container from "@/components/ui/container";

// Creating and exporting footer component as default
export default function Footer():ReactNode {
    // Returning JSX
    return (
        <footer>
            <Container>
                <ul className={'list-disc ml-2 dark:[&>li]:text-white [&>li]:text-black'}>
                    <li><ArrowLink link={'https://github.com/tasha-dev/'} title={'Github'}/></li>
                    <li><ArrowLink link={'https://www.linkedin.com/in/mahditasha/'} title={'Linkedin'}/></li>
                </ul>
            </Container>
        </footer>
    );
}