<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { page } from '$app/stores';
  
  // import logo from '$lib/images/logo-philippa-white.svg';
  export let logoSrc = null;
  export let baseline = '';
  export let menuItems = [];
  $: route = $page.route.id;
  let viewportW;
  const mobileNavBreakpoint = 768
</script>

<!--
  @component
  Nav component with props `logoSrc`, `baseline` and `menuItems`.
  Usage:
  - JS:
  ```js
  import logoSrc from '$lib/images/logo.svg';
  export let menuItems = [
    { href: '/', title: 'Home'},
    { href: '/contact', title: 'Contact'}
  ];
  ```
  - Svelte:
  ```html
  <Nav {logoSrc} baseline="This project has the awesomest baseline" {menuItems} />
  ```
-->

<svelte:window bind:innerWidth={viewportW}/>

{#if logoSrc}
<Navbar let:hidden let:toggle fluid=true
  class="!bg-transparent dark:text-white !px-0 py-base"
>
  <!-- <NavBrand href="/" class="z-50"> -->
  <NavBrand href="/">
    <img
      src="{logoSrc}"
      alt="{baseline}"
      class="nav-brand"
    >
  </NavBrand>
    
  {#if menuItems.length }
  <NavHamburger on:click={toggle} class="!rounded focus:!ring-0" />
  
  <NavUl {hidden}
    id="navbar-ul"
    ulClass="flex flex-col p-4 md:pr-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-coolgray max-md:bg-primary max-md:!text-white"
    activeClass="font-bold"
    nonActiveClass="hover:border-primary hover:max-sm:bg-secondary"
  >
    {#each menuItems as item}
      <NavLi class="rounded-none md:border-b border-transparent" href="{item.href}" active={route === item.href} on:click={(viewportW < mobileNavBreakpoint) ? toggle : null}>{item.title}</NavLi>
    {/each}
  </NavUl>
  {/if}
</Navbar>
{/if}