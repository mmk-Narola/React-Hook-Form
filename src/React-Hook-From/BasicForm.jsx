import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
let renderCount = 0;

const BasicForm = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("===", data);
  };

  renderCount += 1;

  return (
    <>
      <div className="container mt-5">
        {renderCount}
        <div className="row">
          <div className="col-6">
            <h3>Example-1 </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <input defaultValue="text" {...register("example")} />
              </div>

              <div className="mb-2">
                <input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && (
                  <span className="text-danger">This fields is required</span>
                )}
              </div>

              <input type="submit" />
            </form>
            <DevTool control={control} />
          </div>
          <div className="col-6">
            <h3>Example-2 </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("firstName")} />
              <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicForm;
