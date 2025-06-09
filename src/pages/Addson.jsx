import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContentLayout from "../components/ContentLayout";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
function Addson() {
  return (
    <ContentLayout>
      <Sidebar />
      <MainContainer>
        Addson
        <Link to="/checkout" className="flex justify-end">
          <Button className="mr-[0]">Next Step</Button>
        </Link>
      </MainContainer>
    </ContentLayout>
  );
}

export default Addson;
