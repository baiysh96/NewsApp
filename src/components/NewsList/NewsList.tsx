import React, { FC } from 'react'
interface INewProp {
  id: number
  title: string
  author: string
  likes: number
  content: string
}
const NewsList: FC<INewProp> = (props): JSX.Element => {
  return (
    <div className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-9 mr-6 mb-4 ">
      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-yellow-300 via-purple-500 to-purple-600"></span>
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-purple-500 to-purple-600"></span>

      <div className="justify-between sm:flex ">
        <div>
          <h5 className="text-xl font-bold text-slate-900">{props.title}</h5>
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-slate-500">{props.content}</p>
      </div>

      <dl className="flex mt-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-slate-600">
            Created by {props.author}
          </dt>
          <dd className="text-xs text-slate-500">31st June, 2022</dd>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-slate-600">Reading time</dt>
          <dd className="text-xs text-slate-500">5 minutes</dd>
        </div>
        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-slate-600">Likes</dt>
          <dd className="text-xs text-slate-500">{props.likes}</dd>
        </div>
      </dl>
    </div>
  )
}

export default NewsList
