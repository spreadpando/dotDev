import Link from 'next/link'

const links = [

  { href: '/', label: '.dev' },
  { href: '/resume', label: 'resume' },
  { href: '/portfolio', label: 'portfolio' },
  { href: '/blog', label: 'blog' }

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}><a>{label}</a></Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        z-index: 1000;
        display: flex;
        padding: 6px 8px;
        background-color: rgba(0, 0, 0, 0.09);
      }
      li:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
      li:hover a {
        color: #FFF;
      }
      a {
        color: #000;
        text-decoration: none;
        font-size: 13px;
      }
    `}
    </style>
  </nav>
)

export default Nav
