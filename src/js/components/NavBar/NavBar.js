import './style.scss';

export default () => {
  console.log('navbar')
  const navBar = document.getElementById('nav');
  navBar.innerHTML = `
    <div>
      <img class="nav-icon" src="https://cdn.onlinewebfonts.com/svg/img_341965.png" />
    </div>
    <ul class="nav-menu">
      <li><a href="#main">Main</a></li>
      <li><a href="#edit">Create/Edit</a></li>
    </ul>
  `
};
