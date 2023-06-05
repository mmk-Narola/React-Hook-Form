import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    reset({
      firstName: "",
      lastName: "",
      age: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>
        {errors?.firstName && (
          <span className="text-danger">This fields is required</span>
        )}

        <div>
          <input
            {...register("lastName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 5,
            })}
          />
        </div>

        {errors?.lastName && (
          <span className="text-danger">This fields is required</span>
        )}

        {errors?.lastName && errors.lastName.type === "pattern" && (
          <span className="text-danger">Please Match The Pattern</span>
        )}
        {errors?.lastName && errors.lastName.type === "maxLength" && (
          <span className="text-danger">Max length exceeded</span>
        )}

        <div>
          <input
            type="number"
            {...register("age", { required: true, min: 2, max: 10 })}
          />
        </div>

        {errors?.age && (
          <span className="text-danger">This fields is required</span>
        )}

        {errors?.age && errors.age.type === "min" && (
          <span className="text-danger">Min Length</span>
        )}
        {errors?.age && errors.age.type === "max" && (
          <span className="text-danger">Max length </span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormValidation;
