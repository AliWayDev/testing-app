import { Layout } from "../../components/Layout/Layout";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
