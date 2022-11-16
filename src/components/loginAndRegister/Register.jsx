import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { actionRegisterAsync, userRegisterAsync } from "../../redux/actions/userAction";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, errorMessage } = useSelector((store) => store.user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    }

   
      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password1,
      };

      if (error) {
        alert("hay error");
        navigate('/service')
      } else {
        alert("usuario creado exitosamente");
        navigate('/service')
      }
      console.log(data);
    
  };
  const ValidatePass = (value) => {
    if (value.length < 8) {
      return "La contraseña debería contener al menos 8 caracteres";
    } else if (value.length > 16) {
      return "La contraseña debe contener menos de 16 de caracteres";
    } else {
      return true;
    }
  };

  return (
    <div>
          <h1 className="register__title">Create account</h1>
      <form onSubmit={handleSubmit(submit)} className="form">

        <label>
        <p> NAME</p>
          <input
            type="text"
      
            className='form__register'
            {...register("name", { required: true })}
          />
          {errors.name && <span>El campo del nombre es requerido</span>}
        </label>
        <label>
        <p> EMAIL</p>
          <input
            type="email"
        
            className='form__register'
            {...register("email", { required: true })}
          />
          {errors.email && <span>El campo del email es requerido</span>}
        </label>
        <label>
       <p> PASSWORD</p>
          <input
            type="password"

            className='form__register'
            {...register("password1", { validate: ValidatePass })}
          />
          {errors.password1 && <span>{errors.password1.message}</span>}
        </label>
        
        <button type="submit" className='form__button' >Registrarse</button>
    

      </form>
    </div>
  );
};

export default Register;
