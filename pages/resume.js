import Nav from '../components/nav'
import Head from 'next/head'
import Resume from '../components/resume'

const ResumePage = () => {
  return (
    <div className='main'>
      <Head />
      <Nav />
      <Resume />
      <style jsx>
        {`
          :global(body) {
            margin: 0;
            font-family: 'Ubuntu Mono', monospace;
          }
          .main {
            position: absolute;
            width:100vw;
            height:100vh;
          }
    `}
      </style>
    </div>
  )
}

export default ResumePage
