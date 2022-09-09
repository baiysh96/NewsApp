import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
interface Values {
  name: string
  surname: string
}
const Users = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
      surname: Yup.string()
        .min(2, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Required'),
    }),
    onSubmit: (values: Values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div>
      <div className=" ml-9  max-w-[700px] p-4 bg-amber-100 mt-2 align-middle">
        <h1 className="mb-3 font-bold text-center">Add new user</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full mb-1 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="text-red-400">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-5">
            <label
              htmlFor="surname"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              SurName
            </label>
            <input
              value={formik.values.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="surname"
              id="surname"
              placeholder="Enter surname"
              className="w-full mb-1 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {formik.errors.surname && formik.touched.surname ? (
              <div className="text-red-400">{formik.errors.surname}</div>
            ) : null}
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Users
