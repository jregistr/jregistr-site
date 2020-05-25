import * as React from "react"
import {graphql as gql, Link, useStaticQuery, withPrefix} from "gatsby"

import "./styles/index.sass"

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
