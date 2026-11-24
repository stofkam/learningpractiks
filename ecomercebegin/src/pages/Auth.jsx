import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSelector, useDispatch } from "react-redux";
import { signUp, logout, login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Enter correct email"),
  password: z.string().min(3, "Min 3 characters"),
});

const Auth = () => {
  const [mode, setMode] = useState("signup");
  const isSuccess = useSelector((state) => state.user.success);
  const authError = useSelector((state) => state.user.error);
  const currentEmail = useSelector((state) => state.user.currentEmail);
  const [curEmeil, setCurEmail] = useState("");
  const [errorMes, setErrorMes] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    setCurEmail(currentEmail);
  }, [currentEmail]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
    mode: "onBlur", // Валидировать, когда пользователь убрал фокус с поля
  });

  const onSubmit = async (data) => {
    // console.log(data);
    if (mode === "signup") {
      dispatch(signUp(data));
    } else {
      dispatch(login(data));
    }

    if (isSuccess) {
      navigate("/");
    }
    if (authError) {
      setErrorMes(authError);
    }
    reset({ email: "", password: "" });
  };

  // Хэндлер для переключения режимов с полной очисткой формы и ошибок
  const handleModeChange = (newMode) => {
    setMode(newMode);
    reset({ email: "", password: "" }, { keepErrors: false });
  };

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-container">
          {errorMes && <p className="error">{errorMes}</p>}

          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-input ${errors.email ? "input-error" : ""}`}
                id="email"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-input ${errors.password ? "input-error" : ""}`}
                id="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>
            <button type="submit" className="btn " disabled={isSubmitting}>
              {isSubmitting
                ? "Loading..."
                : mode === "signup"
                  ? "Sign Up"
                  : "Login"}
            </button>
          </form>

          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    (handleModeChange("login"), setCurEmail(""));
                  }}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    (handleModeChange("signup"), setCurEmail(""));
                  }}
                >
                  Sign up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
