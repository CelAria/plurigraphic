import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
