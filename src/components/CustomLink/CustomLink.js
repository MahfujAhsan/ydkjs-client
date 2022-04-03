import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div style={{}}>
            <div>
                <Link
                    style={{borderBottom: match ? '5px solid #DE970B' : '5px solid gray', paddingBottom: match ? '5px' : '5px', borderRadius: match ? '5px' : '5px'}}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        </div>
    );
}

export default CustomLink;