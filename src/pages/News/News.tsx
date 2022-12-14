import React, { useEffect } from 'react'
import { AppUseDispatch, useAppSelector } from '../../hooks/redux'
import { fetchNews } from '../../redux/slices/newsSlice'
import NewsList from '../../components/NewsList'
import Spinner from '../../components/Spinner'

const News = () => {
  const { news, isLoading, error } = useAppSelector((s) => s.newsReducer)
  console.log(news)
  const dispatch = AppUseDispatch()
  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-3 mt-2">News</h1>
      {isLoading ? (
        <div className="flex justify-center items-center mt-8">
          <Spinner />
        </div>
      ) : null}
      {error && <div className="flex justify-center items-center">{error}</div>}
      {news?.map((item) => (
        <NewsList
          key={item.id}
          id={item.id}
          author={item.author}
          title={item.title}
          content={item.content}
          likes={item.likes}
        />
      ))}
    </>
  )
}

export default News
