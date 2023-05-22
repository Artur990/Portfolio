import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required Name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required Email"),
      message: Yup.string().required("Required Message"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(
          "service_ji1s77s",
          "template_amammcn",
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          "BB-QhNOKHgReTtgpU"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully");
            setSubmitting(false);
            resetForm();
          },
          (err) => {
            console.error("FAILED...", err);
            setSubmitting(false);
          }
        );
    },
  });
  return (
    <motion.section
      id="contact"
      className="my-3 h-auto min-h-[50vh] w-full p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <h2 className="m-5 text-center text-2xl font-extrabold text-white">
        Contact me
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <article className="m-2 h-44 w-full rounded-2xl bg-black text-center text-white opacity-60 md:w-[30%]">
          <AiOutlineMail className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
          <h4 className="text-2xl font-bold text-white">Email</h4>
          <h4 className="text-lg font-bold text-gray-300">
            artur.grzebski@icloud.com
          </h4>
        </article>
        <article className="m-2 h-44 w-full rounded-2xl bg-black text-center text-white opacity-60 md:w-[30%]">
          <AiOutlinePhone className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
          <h3 className="text-2xl font-bold text-white">Phone</h3>
          <h4 className="text-lg font-bold text-gray-300">505-970-141</h4>
        </article>
        <article className="m-2 h-44 w-full rounded-2xl bg-black text-center text-white opacity-60 md:w-[30%]">
          <AiFillGithub className="m-auto my-2 h-7 w-7 text-base text-teal-500" />
          <h3 className="text-2xl font-bold text-white">GitHub</h3>
          <h4 className="text-lg font-bold text-gray-300">GithubArtur990</h4>
        </article>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto mt-10 w-full max-w-xl"
      >
        <div className="mb-6 flex flex-wrap">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="mb-4 w-full rounded border-0 bg-gray-100 px-4 py-2 text-gray-900"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-600">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-6 flex flex-wrap">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-4 w-full rounded border-0 bg-gray-100 px-4 py-2 text-gray-900"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600">{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-6 flex flex-wrap">
          <textarea
            name="message"
            placeholder="Message"
            className="w-full rounded border-0 bg-gray-100 px-4 py-2 text-gray-900"
            rows={6}
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-600">{formik.errors.message}</p>
          )}
        </div>
        <div className="flex flex-wrap">
          <button
            type="submit"
            className="w-full cursor-pointer rounded bg-teal-500 px-8 py-2 font-bold text-white hover:bg-teal-700"
            disabled={formik.isSubmitting}
          >
            Send
          </button>
        </div>
      </form>
    </motion.section>
  );
};
// export default Contact;
