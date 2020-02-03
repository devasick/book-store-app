import React from "react";
import Header from "./header/Header";
import SideNav from "./sidenav/SideNav";
import Footer from "./footer/Footer";
import BookList from "./books/BookList";

/**
 * Header: it will display header part & search book component
 * SideNav: left menu catagory will display
 * BookList: books list will display with pagination
 * Footer: footer content will display
 */

const App = () => (
  <React.Fragment>
    <Header />
    <SideNav />
    <BookList />
    <Footer />
  </React.Fragment>
);

export default App;
