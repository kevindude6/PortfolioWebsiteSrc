import React from "react"
import { Helmet } from "react-helmet"
class MetaData extends React.Component {
  render() {
    return (
      <div className="metadata">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kevin DiCola</title>
          <description>Kevin DiCola's portfolio.</description>
          <link rel="canonical" href="https://www.kevindicola.net" />

          <html lang="en" />
        </Helmet>
      </div>
    )
  }
}
export default MetaData