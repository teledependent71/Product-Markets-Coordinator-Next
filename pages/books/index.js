import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'
import PropTypes from 'prop-types'

import booksPageInitialProps6ca62Resource from '../../resources/books-page-initial-props-6ca62'

const Books1 = (props) => {
  return (
    <>
      <div className="books1-container">
        <Head>
          <title>Books1 - Product Markets Coordinator</title>
          <meta
            property="og:title"
            content="Books1 - Product Markets Coordinator"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(BooksEntities) => (
                  <>
                    <div className="books1-container1">
                      <h1>{BooksEntities?.title}</h1>
                      <span>{BooksEntities?.title}</span>
                      <span>{BooksEntities?.price}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.booksEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .books1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .books1-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Books1.defaultProps = {
  booksEntities: [],
}

Books1.propTypes = {
  booksEntities: PropTypes.array,
}

export default Books1

export async function getStaticProps(context) {
  const response = await booksPageInitialProps6ca62Resource({
    ...context?.params,
  })
  return {
    props: {
      booksEntities: response,
      ...response?.meta,
    },
    revalidate: 60,
  }
}
