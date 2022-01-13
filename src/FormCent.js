import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Validation library
import Misterio from "./Misterio";

const FormCent = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("required"),
     
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.touched);

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="formulario">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="firstName"
            id="nombre"
            value={formik.values.firstName}
            onChange={formik.handleChange}
			onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
			onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            id="correo"
            value={formik.values.email}
            onChange={formik.handleChange}
			onBlur={formik.handleBlur}
          />
        </div>
		{formik.touched.email &&formik.errors.email ? <p>{formik.errors.email}</p> : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormCent;
