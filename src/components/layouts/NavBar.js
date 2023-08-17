import React from "react";
import { Link } from "react-router-dom"

export default function NavBAr() {
    return (
        <header>
            <div class="header-main sticky-nav ">
                <div class="container position-relative">
                    <div class="row">
                        <div class="col-auto align-self-center">
                            <div class="header-logo">
                                <a href="index.html"><img src="assets/images/logo/logo.png" alt="Site Logo" /></a>
                            </div>
                        </div>
                        <div class="col align-self-center d-none d-lg-block">
                            <div class="main-menu">
                                <ul>
                                    <li class="dropdown"><Link to="/">Home <i class="pe-7s-angle-down"></i></Link>
                                     
                                    </li>
                                  
                                    <li><Link to="about">About us</Link></li>
                                    <li><Link to="Contact">Contact Us</Link></li>
                                    <li><Link to="women">Women</Link></li>
                                    <li><Link to="men">Men</Link></li>
                                    <li><Link to="top-brands">Top Brands</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-lg-auto align-self-center pl-0">
                            <div class="header-actions">
                                <a href="login.html" class="header-action-btn login-btn" data-bs-toggle="modal"
                                    data-bs-target="#loginActive">Sign In</a>
                                <a href="#" class="header-action-btn" data-bs-toggle="modal" data-bs-target="#searchActive">
                                    <i class="pe-7s-search"></i>
                                </a>
                                <a href="#offcanvas-wishlist" class="header-action-btn offcanvas-toggle">
                                    <i class="pe-7s-like"></i>
                                </a>
                                <a href="#offcanvas-cart"
                                    class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                    <i class="pe-7s-shopbag"></i>
                                    <span class="header-action-num">01</span>
                                </a>
                                <a href="#offcanvas-mobile-menu"
                                    class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                    <i class="pe-7s-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>   
        </header>
    );
}