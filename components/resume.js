const sections = [
  {
    company: 'Onno T-Shirt Company',
    year: '2019 Jan – 2019 Sep',
    position: 'Freelance Digital Marketing Assistant',
    description: 'Google & FB PPC conversion driven retargeting & prospecting campaign funnels. Creative asset development.'
  },
  {
    company: 'Resonate Streaming Cooperative',
    year: '2018 May – 2019 Sep',
    position: 'Catalog Manager',
    description: 'Python 3 and Javascript Development, Artist / Label Relations for a co-operative, artist owned music streaming platform. '
  },
  {
    company: 'Rare Earth Vibration Association',
    year: '2016 Sep – 2017 Jan',
    position: 'Marketing Assistant',
    description: 'Executed Targeted Email Campaigns and Music Distribution and Marketing for Jazz Ensembles in the New York and Upstate areas.'
  },
]

const Resume = () => {
  return (
    <div className='Resume'>

      {sections.map((section, i) => (
        <article className='Section' key={`resume-section-${i}`}>
          <h1 className='resume-line company'>{section.company}</h1>
          <h3 className='resume-line years'>{section.year}</h3>
          <p className='resume-line description'>
            <strong className='position'>{section.position}: </strong>
            {section.description}</p>
        </article>
      ))}

      <style jsx global>
        {`
          .Resume {
            position: relative;
            display: block;
            width: 50%;
            margin: 5% 25% 0 25%;
          }
          .resume-line {
            margin: 0;
          }
          .company{
          }
          .years{
            color: rgba(0, 0, 0, 0.5);
          }
          .position{
            color: rgba(0, 0, 0, 1);
          }
          .description{
            color: rgba(0, 0, 0, 0.5);
            margin-top: 0.5%;
          }
          .Section{
            background-color:rgba(0, 0, 0, 0);
            margin-bottom: 1.5%;
          }
          .Section:hover{
            background-color:rgba(255, 0, 0, .1)
          }
          `}
      </style>

    </div>

  )
}
export default Resume
