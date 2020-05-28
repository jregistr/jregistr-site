import * as React from "react"
import {graphql as gql, Link, useStaticQuery, withPrefix} from "gatsby"

import "./styles/index.sass"

// function addNetlifyIdentityScript(): void {
//     if(document) {
//         const script = document.createElement("script");
//         script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
//         // script.async = true
//         document.body.appendChild(script);
//     }
// }
//
// function addAdminRedirectScript(): void {
//     if(document) {
//         const script = document.createElement("script");
//         script.async = true;
//         script.innerText = `
//         if (window.netlifyIdentity) {
//             window.netlifyIdentity.on("init", user => {
//                 if (!user) {
//                     window.netlifyIdentity.on("login", () => {
//                         document.location.href = "/admin/";
//                     });
//                 }
//             })
//         }
//     `
//         document.body.appendChild(script);
//     }
// }

const IndexPage = () => {
    const data = useStaticQuery(gql`
        query FooobarQuery {
            file(relativePath: { eq: "coming-soon.jpg" }) {
                childImageSharp {
                    fluid {
                        src
                        originalImg
                    }
                }

            }
        }
    `)

    return (

        <>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
            <main>
                <div className="wrapper"
                     style={{backgroundImage: `url(${data.file.childImageSharp.fluid.originalImg})`}}>
                    <div>
                        <h1>Coming Soon</h1>
                    </div>
                </div>
            </main>
        </>
    )
}

export default IndexPage
