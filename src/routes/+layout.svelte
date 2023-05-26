<script>
  import { onMount } from 'svelte';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  
  // import CSS
	import '../app.css';
  
  // import components
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '../lib/components/Nav.svelte';
	// import NotificationBanner from '$/lib/components/NotificationBanner.svelte';
	// import NotificationModal from '$lib/components/NotificationModal.svelte';

  import logoSrc from '$lib/images/dungelhoeff-logo.svg';

  const menuItems = [
    // { href: '/', title: 'Home'},
    // { href: '/contact', title: 'Contact'}
  ];
  
  /** @type {import('./$types').PageData} */
  export let data;
  
  onMount(async () => {
    data.lightbox.init();
  });  
  
  inject({ mode: dev ? 'development' : 'production' });
</script>

<div>
  <!-- <NotificationBanner/> -->
  <!-- <NotificationModal repeatNthRequest=6/> -->
  <header>
    <Nav {logoSrc} {menuItems}/>
  </header>
  <main>
    <slot/>
  </main>
</div>

<Footer>
  <svelte:fragment slot="address">
    Projectadres: Philippe Saveryslaan 72, 9140 Temse
  </svelte:fragment>
  <svelte:fragment slot="developer">
    Een project van Nieuw Temse
  </svelte:fragment>
</Footer>