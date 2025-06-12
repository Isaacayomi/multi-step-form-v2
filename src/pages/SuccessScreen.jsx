import SUCCESS_ICON from "../assets/Check.png";
import ContentLayout from "../components/ContentLayout";
import Headings from "../components/Headings";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
const SuccessScreen = () => {
  return (
    <div>
      <ContentLayout>
        <Sidebar />
        <MainContainer>
          <img
            src={SUCCESS_ICON}
            alt="Success icon"
            className="block mx-auto pt-[4.94rem] pb-[1.5rem]"
          />
          <Headings>
            <p className="text-center">Thank you!</p>
          </Headings>
          <p className="font-ubuntu leading-[1.5625rem] text-grey text-center px-[1.4rem] pt-[0.56rem] pb-[1.38rem] md:text-[1rem] md:w-[28.125rem] md:max-w-full md:mx-auto">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </MainContainer>
      </ContentLayout>
    </div>
  );
};

export default SuccessScreen;
