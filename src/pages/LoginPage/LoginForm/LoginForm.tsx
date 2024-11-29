import { FC } from "react";
import { Style } from "../../../components/Button/Button";
import { Button, FormInput, SectionForm } from "../../../components/index";
import { schemaLog } from "../../../schemas/shemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { logIn } from "../../../redux/auth/authOperation";

export type FormValues = {
  name: string;
  email: string;
  password: string;
};
export type LoginValues = Omit<FormValues, "name">;

const LoginForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<LoginValues>({
    resolver: yupResolver(schemaLog),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    console.log(data);
    dispatch(logIn({ email: data.email, password: data.password }));
    reset();
  };

  const isEmailValid = !errors.email && getValues("email");
  const isPasswordValid = !errors.password && getValues("password");

  return (
    <>
      <SectionForm
        title="Login"
        text="Please enter your login details to continue using our service"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <div className="flex flex-col gap-4 mb-8 tablet:gap-5">
            <FormInput
              success={isEmailValid}
              error={errors.email}
              label="email"
              placeholder="Email"
              register={register}
            />
            <FormInput
              success={isPasswordValid}
              error={errors.password}
              label="password"
              placeholder="Password"
              register={register}
              type="password"
            />
          </div>
          <Button type="submit" text="Log in" style={Style.Dark} />
        </form>
      </SectionForm>
    </>
  );
};

export default LoginForm;
