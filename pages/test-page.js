import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Product Markets Coordinator</title>
          <meta
            property="og:title"
            content="test-page - Product Markets Coordinator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_opvnco) => (
            <>
              <h1>{context_opvnco?.name}</h1>
            </>
          )}
          initialData={props.contextOpvncoProp}
          persistDataDuringLoading={true}
          key={props?.contextOpvncoProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const contextOpvncoProp = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextOpvncoProp: contextOpvncoProp?.data?.[0],
    },
  }
}
