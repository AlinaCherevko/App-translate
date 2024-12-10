import { FC } from "react";
import { Style } from "../../../components/Button/Button";
import { FormInput, SectionForm, Button } from "../../../components/index";
import { FormValues } from "../../LoginPage/LoginForm/LoginForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaReg } from "../../../schemas/shemas";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { signup } from "../../../redux/auth/authOperation";

const RegisterForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schemaReg),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(
      signup({ name: data.name, email: data.email, password: data.password })
    );
    reset();
  };
  const isNameValid = !errors.name && getValues("name");
  const isEmailValid = !errors.email && getValues("email");
  const isPasswordValid = !errors.password && getValues("password");

  return (
    <>
      <SectionForm
        title="Register"
        text="To start using our services, please fill out the registration form below. "
      >
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <div className="flex flex-col gap-4 mb-8 tablet:gap-5">
            <FormInput
              success={isNameValid}
              error={errors.name}
              label="name"
              placeholder="Name"
              register={register}
              style={Style.Dark}
            />
            <FormInput
              success={isEmailValid}
              error={errors.email}
              label="email"
              placeholder="Email"
              register={register}
              style={Style.Dark}
            />
            <FormInput
              success={isPasswordValid}
              error={errors.password}
              label="password"
              placeholder="Password"
              register={register}
              type="password"
              style={Style.Dark}
            />
          </div>
          <Button type="submit" text="Register" style={Style.Dark} />
        </form>
      </SectionForm>
    </>
  );
};

export default RegisterForm;
