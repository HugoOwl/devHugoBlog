import react from 'react';
function Header() {
  return (
    <header className="header">

      <div className="toolbar">
        <div className="">
          <a href='/'>Diffusion</a>
        </div>
        <div className="">
          <button>Novo Post</button>
          <span>Img 1</span>
          <span>Img 2- alteração</span>
        </div>

      </div>
    </header >
  )
}
export default Header;