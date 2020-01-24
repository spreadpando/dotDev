import Nav from '../components/nav'
import Head from 'next/head'
import Bio from '../components/bio'

const HomePage = () => {
  return (
    <div className='main'>
      <Head />
      <Nav />
      <Bio />
      <style jsx>
        {`
          :global(body) {
            margin: 0;
            font-family: 'Ubuntu Mono', monospace;
          }
          .main {
            position: absolute;
          }
    `}
      </style>
    </div>
  )
}

export default HomePage
