const renderHeader = () => {
	const content = document.querySelector('#content');
	const markup = `<header>
	<button id="home-btn" class="active">Home</button>
	<button id="menu-btn">Menu</button>
	<button id="contacts-btn">Contacts</button>
	</header>
	<main id="main"></main`
	content.innerHTML = markup;
};
export { renderHeader };