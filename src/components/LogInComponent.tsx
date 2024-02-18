import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import {
  EnvelopeIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/24/solid";

const LogInComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: any) => {
    console.log(data); 
    reset();
  };

  return (
    <div className="h-full w-full">
      <div className=" px-3 sm:px-0 flex justify-center  flex-wrap sm:flex-nowrap  items-center  h-screen homepagebanner bg-center bg-cover ">
        <div className=" w-full  sm:h-[500px]  sm:max-w-[474px] gradientC rounded-lg p-8 py-20 sm:py-0 flex flex-col justify-center gap-8">
          <h1 className="  text-center uppercase ">Welcome</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div>
              <Input
                type="text"
                size="sm"
                {...register("username", { required: true })}
                label="User name"
                placeholder="Enter your user name"
                endContent={<EnvelopeIcon className="w-8" />}
              />
              {errors.username && (
                <p className="text-webDarkBlue mt-2">User Name is required</p>
              )}
            </div>

            <div>
              <Input
                type={showPassword ? "text" : "password"}
                size="sm"
                {...register("password", { required: true })}
                label="Password"
                placeholder="Enter your Password"
                endContent={
                  <div
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <LockOpenIcon className="w-8" />
                    ) : (
                      <LockClosedIcon className="w-8" />
                    )}
                  </div>
                }
              />
              {errors.password && (
                <p className="text-webDarkBlue mt-2">Password is required</p>
              )}
            </div>

            <Button
              className="bg-webDarkBlue text-white py-2 px-4 rounded-lg w-full"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </div>

        <div className="hidden   sm:flex flex-col justify-center items-center  w-full h-[500px] max-w-md gradientC rounded-lg p-8  ">
          <h2 className="text-white">
            End-to-End rewards and loyalty solution provider
          </h2>
          <p className=" mt-4 text-white">
            Munero is a Global Rewards Management company. We’re your end-to-end
            rewards and loyalty solution provider. Our combined experience spans
            over 25 years, where we’ve been connecting customers to companies by
            increasing brand value through our loyalty and reward fulfillment
            system
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
