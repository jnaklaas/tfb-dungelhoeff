<script>
  import { onMount } from 'svelte';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  
  // import CSS
	import '../app.css';
  
  // import components
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	// import NotificationBanner from '$lib/components/NotificationBanner.svelte';
	// import NotificationModal from '$lib/components/NotificationModal.svelte';

  import logoSrc from '$lib/images/dungelhoeff-logo.svg';

  const menuItems = [
    { href: '/', title: 'Home'},
    { href: '/ligging', title: 'Ligging'},
    { href: '/aanbod', title: 'Aanbod'},
    // { href: '/galerij', title: 'Galerij'},
    // { href: '/infoavond', title: 'Infoavond'},
    { href: '/contact', title: 'Contact'}
  ];
  
  /** @type {import('./$types').PageData} */
  export let data;
  
  onMount(async () => {
    data.lightbox.init();
  });  
  
  inject({ mode: dev ? 'development' : 'production' });
</script>

<!-- <NotificationBanner>Extra interessant: verlaagd btw-tarief van 6%</NotificationBanner> -->

<header class="container-fluid-wide">
  <Nav {logoSrc} {menuItems}/>
</header>

<main>
  <slot/>
</main>

<Footer>
  <svelte:fragment slot="address">
    Projectadres: Mechelsesteenweg 28, Lier
  </svelte:fragment>
  <svelte:fragment slot="developer">
    Een project van Cordeel Group
  </svelte:fragment>
</Footer>