const sections = [
  {
    company: '',
    year: '',
    position: '',
    description: ''
  }
]

const Bio = () => {
  return (
    <div className='Resume'>
      <article>

        <h1>
          DEV
        </h1>

        {sections.map((section, i) => (
          <p className='Section' key={`graph-${i}`}> {graph.content}</p>
        ))}

      </article>

      <style jsx global>
        {`
          .Resume {
              position: relative;
              display: block;
              width: 50%;
              margin: 5% 25% 0 25%;
          }
          .Section{
              background-color:rgba(0, 0, 0, 0)
          }
          .Section:hover{
              background-color:rgba(255, 0, 0, .1)
          }
          `}
      </style>

    </div>

  )
}
export default Bio
