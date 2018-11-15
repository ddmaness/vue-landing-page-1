Vue.component('landing-footer', {
	template:   `<Footer>
                <div>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p>Vue Landing Page [copywrite symbol] 2018</p>
                </div>
                <div>
                    <ul>
                        <li href="#">[soc media]</li>
                        <li href="#">[soc media]</li>
                        <li href="#">[soc media]</li>
                    </ul>
                </div>
                
                </Footer>`
});

Vue.component('call-to-action', {
	template:   `<Section class="call-to-action">
                    <h2>Why wait? Get started today!</h2>
                    <slot></slot>
                </Section>`
});

Vue.component('image-text-sbs', {
	props: ['heading', 'text', 'src', 'alt'],
	template:  `<Section class='image-text-sbs'>
                    <div>
                        <h2>{{ heading }}</h2>
                        <p>{{ text }}</p>
                    </div>
                    <div data-src="src"></div>
                </Section>`
});

Vue.component('list', {
	template: `<Section class="list">
                    <slot></slot>
                </Section>`
});

Vue.component('list-item', {
	props: ['heading', 'text', 'src', 'alt'],
	template: `<div>
					<img height="150px" :src="src">
                    <h3>{{ heading }}</h3>
                    <p>{{ text }}</p>
                </div>`
});

Vue.component('page-header', {
	template: `<Header>
                    <h3 class="header-text">Vue Landing Page</h3>
                    <button class="header-btn">Sign In</button>
                </Header>`
});

Vue.component('hero', {
	template: `<Section class="hero">
                    <h1 class="hero-text">A landing page created using the Vue framework</h1>
                    <slot></slot>
                </Section>`
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
				text: 'Adipisicing eiusmod amet voluptate nisi consequat magna minim non voluptate. Commodo sint veniam commodo duis cillum in. Elit non aute commodo officia ut duis minim pariatur sint dolor quis.'
			},
			{
				src: 'images/paper-stack.png',
				heading: 'Quis nisi incididunt',
				text: 'Nisi Lorem commodo id adipisicing ea et nulla ad voluptate consequat eu. Culpa esse Lorem in esse ut elit aliquip duis qui. Tempor elit aute do non mollit quis minim minim est proident enim irure magna.'
			},
			{
				src: 'images/checkmark.png',
				heading: 'Irure aute',
				text: 'Ad ullamco ex enim officia deserunt tempor non amet velit excepteur in. Sint excepteur nisi nisi ipsum mollit sit exercitation in. Laboris irure qui consequat excepteur eu. Aliqua aliquip non deserunt eiusmod. Est dolore aliquip voluptate non amet sit ex pariatur cupidatat. Anim et aliquip do enim irure nisi non minim ad labore et sint quis qui.'
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