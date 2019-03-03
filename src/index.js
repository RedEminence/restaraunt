import { renderHeader } from './Header';
import { homeLayout } from './Home';
import { menuLayout } from './Menu';
import { contactsLayout } from './Contacts';
import './style/app.css';

renderHeader();

const main = document.querySelector('#main')
main.innerHTML = homeLayout();

function renderTabs(tab) {
	main.innerHTML = tab;
}

const tabs = [homeLayout(), menuLayout(), contactsLayout()];

const buttons = document.querySelectorAll('button');
buttons.forEach((button, index) => {
	button.addEventListener('click', function() {
		for (let i = 0; i < buttons.length; i++ ) {
				buttons[i].classList.remove('active');
		}
		renderTabs(tabs[index]);
		const text = this.textContent.toLowerCase();
		const currentTab = document.getElementById(`${text}-btn`);
		currentTab.classList.add('active');
	}) 
});	
