export default function Sidebarpage() {
    return (
        <div className="container-scroller">
            {/* partial */}
            <div>
                <div className="container-fluid page-body-wrapper">
                    {/* partial:partials/_sidebar.html */}
                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    <i className="typcn typcn-device-desktop menu-icon" />
                                    <span className="menu-title">About</span>
                                    {/* <div class="badge badge-danger">new</div> */}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    <i className="typcn typcn-archive menu-icon" />
                                    <span className="menu-title">Contact Us</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    data-bs-toggle="collapse"
                                    href="#ui-basic"
                                    aria-expanded="false"
                                    aria-controls="ui-basic"
                                >
                                    <i className="typcn typcn-document-text menu-icon" />
                                    <span className="menu-title">UI Elements</span>
                                    <i className="menu-arrow" />
                                </a>
                                <div className="collapse" id="ui-basic">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item">
                                            {" "}
                                            <a className="nav-link" href="#">
                                                A
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            {" "}
                                            <a className="nav-link" href="#">
                                                B
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            {" "}
                                            <a className="nav-link" href="#">
                                                C
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* page-body-wrapper ends */}
            </div>
            {/* container-scroller */}
        </div>

    )
}