import React  from 'react';

export const AppTopbar = (props) => {

    return (
        <div className="layout-topbar">
            <div className="layout-topbar-logo">
                <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo-dark.svg' : 'assets/layout/images/logo-white.svg'} alt="logo"/>
                <span>SAKAI</span>
            </div>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>
        </div>
    );
}
