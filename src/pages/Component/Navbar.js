import Link from "next/link"

const Navbar = () => {
    
    return (
        <div className='nav container-flued sticky-top'>
            <div className='container'>
                <div className=" navbar sticky-top" >
                    <div className="col-6">
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <Link className='linku' href='/' > <h1 className='logoname'>JUSTSEARCH</h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" sudiv col-6">

                    <div className="btn warning tog navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <div><img className='burgrr' src='https://res.cloudinary.com/dgvvfn1gf/image/upload/v1678133032/ss_akvziu.png' /></div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <Link className='linku' href="/">< li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                                    HOME
                                </li>
                                </Link>
                                <Link className='linku' href="/Component/Category"> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                                    CATEGORY
                                </li>
                                </Link>
                                <Link className='linku' href="/Component/About" > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                                    ABOUT US
                                </li>
                                </Link>
                                <Link className='linku' href="/Component/Offer" > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                                    OFFER
                                </li>
                                </Link>
                                <Link className='linku' href="/Component/Team" > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                                    TEAM
                                </li>
                                </Link>
                                <Link className='linku' href="/Component/Contact"> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                                    CONTACT US
                                </li>
                                </Link>
                                <Link className='linku' href="/Component/Services"  ><li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                                    SELL SERVISES
                                </li>
                                </Link>
                                <Link className='linku' href="/Component/Dshboard" > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                                    DASHBOARD
                                </li>
                                </Link>

                                <Link className='linku' href="/Component/ss" > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                                    SINGOUT
                                </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div >

  )
}

export default Navbar
