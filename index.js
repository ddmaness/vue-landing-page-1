Vue.component('page-header', {
	template: `<Header class="header">
                    <h3>Vue Landing Page</h3>
                    <button>Sign In</button>
                </Header>`
});

Vue.component('hero', {
	template: `<Section class="hero">
                    <h1>A landing page created using the Vue framework</h1>
                    <slot></slot>
                </Section>`
});

Vue.component('list', {
	template: `<Section class="list">
                    <slot></slot>
                </Section>`
});

Vue.component('list-item', {
	props: ['heading', 'text', 'src', 'alt'],
	template: `<div class='list-item'>
					<div class='img-container'>
						<img height="150px" :src="src">
					</div>
                    <h3>{{ heading }}</h3>
                    <p>{{ text }}</p>
                </div>`
});

Vue.component('image-text-sbs', {
	props: ['heading', 'text', 'src', 'alt'],
	template:  `<Section class='image-text-sbs'>
                    <div class='image-text-sbs__text'>
                        <h2>{{ heading }}</h2>
                        <p>{{ text }}</p>
                    </div>
                    <div class='image-text-sbs__img' :style='{backgroundImage:"url("+src+")"}'></div>
                </Section>`
});

Vue.component('call-to-action', {
	template:   `<Section class="call-to-action">
                    <h2>Why wait? Get started today!</h2>
                    <slot></slot>
                </Section>`
});

Vue.component('landing-footer', {
	template:   `<Footer class="landing-footer">
                <div>
                    <ul class="landing-footer__links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="landing-footer__social-media">
                        <li href="#"><img src="./images/facebook.svg"></img></li>
                        <li href="#"><img src="./images/instagram.svg"></img></li>
                        <li href="#"><img src="./images/twitter.svg"></img></li>
                    </ul>
				</div>
				<p class="landing-footer__copywrite">Vue Landing Page &copy; 2018</p>
                
                </Footer>`
});

Vue.component('sign-up-form', {
	template:   `<form> 
                    <input type="email" placeholder="Please enter your email"/>
                    <button type="submit">Sign up!</button>
                </form>`
});

var app = new Vue({ 
	el: '#app',
	data: {
		benefitItems: [
			{
				src: 'images/monitor.png',
				heading: 'Ut pariatur',
				text: 'Adipisicing eiusmod amet voluptate nisi consequat magna minim non voluptate. Commodo sint veniam commodo duis cillum in.'
			},
			{
				src: 'images/paper-stack.png',
				heading: 'Quis nisi incididunt',
				text: 'Nisi Lorem commodo id adipisicing ea et nulla ad voluptate consequat eu. Culpa esse Lorem in esse ut elit aliquip duis qui.'
			},
			{
				src: 'images/checkmark.png',
				heading: 'Irure aute',
				text: 'Ad ullamco ex enim officia deserunt tempor non amet velit excepteur in.'
			},
		],
		imageTextCombos: [
			{
				src: 'images/laptop.jpg',
				heading: 'Irure velit sunt ipsum minim aliqua aute reprehenderit quis.',
				text: 'Incididunt non non Lorem nisi tempor labore amet officia non irure. Lorem voluptate irure irure irure ipsum eiusmod. Consectetur commodo ut cupidatat nisi mollit. Voluptate esse cillum dolor mollit.'
			},
			{
				src: 'images/code.jpg',
				heading: 'Laboris cillum exercitation est nulla duis voluptate esse voluptate.',
				text: 'Dolor culpa aliquip ipsum dolore adipisicing dolore amet ea nulla. Occaecat ipsum ut ullamco irure culpa duis. Ea incididunt ipsum consequat dolore reprehenderit veniam sit adipisicing.'
			},
			{
				src: 'images/sleeping-cat.jpg ',
				heading: 'Aute velit esse cupidatat ea nulla duis.',
				text: 'Deserunt officia officia velit eiusmod enim consectetur exercitation veniam ea fugiat. Fugiat ut consequat minim ea sunt. Adipisicing labore officia sit est culpa amet nisi elit sint. Consequat cillum irure elit culpa Lorem est. Aliquip duis Lorem exercitation et velit voluptate elit officia excepteur consequat cillum aute pariatur aliqua.'
			},
		],
		testimonials: [
			{
				src: 'images/portrait-1.jpg',
				heading: 'Veniam Ut Commodo',
				text: 'Adipisicing sunt esse sunt officia et exercitation cillum elit esse id esse elit.'
			},
			{
				src: 'images/portrait-2.jpg',
				heading: 'Eiusmod',
				text: 'Et Lorem nisi nostrud excepteur duis sunt cupidatat.'
			},
			{
				src: 'images/portrait-3.jpg',
				heading: 'Deserunt Proident',
				text: 'Commodo irure labore consequat pariatur et Lorem ad in nulla exercitation non.'
			},
		],
	}
});