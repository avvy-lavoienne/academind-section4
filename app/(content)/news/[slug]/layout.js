import React from 'react'

const NewsDetailLayout = ({children, modal}) => {
  return (
    <>
    {modal}
    {children}
    </>
  )
}

export default NewsDetailLayout