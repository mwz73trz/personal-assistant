import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "../App.css";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
          Personal Assistant
        </Navbar.Brand>
      </Navbar>
      <div className="sidebar">
        <CDBSidebar textColor="#333" backgroundColor="#faebd7">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            Navigation
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClick">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/contacts" activeClassName="activeClick">
                <CDBSidebarMenuItem icon="list">Contacts</CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/contacts-management"
                activeClassName="activeClick"
              >
                <CDBSidebarMenuItem icon="user">
                  Manage Contacts
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/tasks" activeClassName="activeClick">
                <CDBSidebarMenuItem icon="list">Tasks</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/notes" activeClassName="activeClick">
                <CDBSidebarMenuItem icon="list">Notes</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Navigation;
