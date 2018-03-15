import React from 'react';

const TabHeader = ({
    onTabClick,
    children
}) =>
    <div onClick={onTabClick}>
        {children}
    </div>

export default TabHeader;