import React from 'react'
import './AddNews.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AppUseDispatch } from '../../hooks/redux'
import { postNews } from '../../redux/slices/newsSlice'
export interface Values {
  title: string
  author: string
  content: string
}
const AddNews = () => {
  const dispatch = AppUseDispatch()
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      content: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(2, 'Too Short!')
        .max(40, 'Too Long!')
        .required('Required'),
      content: Yup.string()
        .min(2, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
    }),
    onSubmit: (values: Values) => {
      dispatch(postNews(values))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit} className="min-w-full">
      <div className="bg-indigo-50 min-h-screen md:px-20 pt-6 w-full">
        <div className=" bg-white rounded-md px-6 py-10 max-w-full mx-auto">
          <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
            ADD THE NEW POST
          </h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="text-lx font-serif">
                Title:
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                type="text"
                placeholder="title"
                id="title"
                className="ml-2 mb-1 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
              {formik.errors.title && formik.touched.title ? (
                <div className="text-red-400">{formik.errors.title}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="author" className="text-lx font-serif">
                Author:
              </label>
              <select
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="author"
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              >
                <option defaultValue="">None</option>
                <option value="1">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="2">4</option>
              </select>
            </div>
            <div>
              {formik.errors.author && formik.touched.author ? (
                <div className="text-red-400">{formik.errors.author}</div>
              ) : null}
              <label
                htmlFor="content"
                className="block mb-2 text-lg font-serif"
              >
                News Content:
              </label>
              <textarea
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.content}
                id="content"
                cols={30}
                rows={10}
                placeholder="Write here.."
                className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
              {formik.errors.content && formik.touched.content ? (
                <div className="text-red-400">{formik.errors.content}</div>
              ) : null}
            </div>
            <button
              // type="submit"
              className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "
            >
              ADD POST
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddNews
