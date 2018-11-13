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
                    <img :src="src">
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
				src: 'images/cat.jpg',
				heading: 'Cat',
				text: 'a cat'
			},
			{
				src: 'images/cat.jpg',
				heading: 'Cat',
				text: 'a cat'
			},
			{
				src: 'images/cat.jpg',
				heading: 'Cat',
				text: 'a cat'
			},
		],
		imageTextCombos: [
			{
				src: 'images/dog.jpg',
				heading: 'Dog',
				text: 'a dog'
			},
			{
				src: 'images/dog.jpg',
				heading: 'Dog',
				text: 'a dog'
			},
			{
				src: 'images/dog.jpg',
				heading: 'Dog',
				text: 'a dog'
			},
		],
		testimonials: [
			{
				src: 'images/dog.jpg',
				heading: 'Dog',
				text: 'a dog'
			},
			{
				src: 'images/dog.jpg',
				heading: 'Dog',
				text: 'a dog'
			},
			{
				src: 'images/dog.jpg',
				heading: 'Dog',
				text: 'a dog'
			},
		],
	}
});