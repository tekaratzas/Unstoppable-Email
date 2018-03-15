import React from 'react';

const TabHeader = ({
    selected,
    onTabClick,
    children
}) =>
    <div className={selected ? "tab-header selected" : "tab-header"} onClick={onTabClick}>
        {children}
    </div>

export default TabHeader;