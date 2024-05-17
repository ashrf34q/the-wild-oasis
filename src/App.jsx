import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
   <Row>
            <Row type="horizontal">
              <Heading as="h1">The Wild Oasis</Heading>
              <div>
                <Heading as="h2">Check in/out</Heading>
                <Button>Check in</Button>
                <Button size="medium" variation="secondary">
                  Check out
                </Button>
              </div>
            </Row>
            <Row>
              <Heading as="h3">Form</Heading>
              <div>
                <Input type="number" placeholder="Number of guests"></Input>
                <Input type="number" placeholder="Budget"></Input>
              </div>
            </Row>
          </Row>
*/
