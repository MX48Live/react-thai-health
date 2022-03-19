import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className="logo">
        <span>
          <img src="/images/main-logo.svg" alt="" />
        </span>
        <span>
          <div className="headline">วารสารการส่งเสริมสุขภาพไทย</div>
          <div className='subline'>Thai Health Promotion Journal</div>
        </span>
      </div>
      <nav className='nav'></nav>
      <div className="action"></div>
    </div>
  )
}

export default Navbar