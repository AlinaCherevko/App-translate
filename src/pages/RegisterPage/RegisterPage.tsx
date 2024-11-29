import { FC } from "react";
import { ImgSection } from "../../components/index";
import RegisterForm from "./RegisterForm/RegisterForm";

const RegisterPage: FC = () => {
  return (
    <section className="tablet:pt-[112px] desktop:pt-[86px] pb-[57px] tablet:pb-[106px] tablet:bg-bgTablet desktop:bg-bgDesktop bg-no-repeat bg-right-bottom">
      <div className="wrapper">
        <div className="flex flex-col desktop:flex-row-reverse desktop:gap-20">
          <ImgSection />
          <p className="text-center text-lightSmall font-bold text-light-link-color mt-[16px] mb-[43px] tablet:hidden">
            Word · Translation · Grammar · Progress
          </p>
          <RegisterForm />
          <p className="hidden desktop:hidden tablet:block tablet:text-center tablet:text-lightSmall tablet:font-bold tablet:text-light-link-color tablet:mt-[98px]">
            Word · Translation · Grammar · Progress
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
