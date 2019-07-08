import React from "react";

import {Link} from "react-router-dom";

const Header = ()=>(
<div>
    <h1><Link to="/">NBA Gennie</Link></h1>
    <h3>Your inquiry is my command</h3>
    <h2><Link to="About">About</Link></h2>
</div>
);

export default Header;