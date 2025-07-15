export default function Header() {
    return (
      <header className = "header">
        <img src="logo.png" width = "100px" alt="GWC logo" />
        <nav>
          <ul className = "nav-list"> 
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
    )
  }
