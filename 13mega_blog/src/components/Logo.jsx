import React from 'react';
function Logo({ width = "60px" }) {
    return <div className={`w-[${width}]`}>
        <img className='rounded-md' src="https://dsim.in/blog/wp-content/uploads/2013/06/blog.jpg" width={width} height={width} />
    </div>;
}

export default Logo;
