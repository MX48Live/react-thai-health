import Navbar from "../common/Navbar/Navbar"

function MainLayout({ children }:any) {
  return (
    <div className="main-layout-container">
      <Navbar />
      { children }
    </div>
  )
}

export default MainLayout