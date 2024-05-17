import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

const Main = styled.main`
  background-color: lightgreen;
  padding: 4rem 4.8rem 6.4rem;
`;

export default AppLayout;
