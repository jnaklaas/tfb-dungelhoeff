<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { page } from '$app/stores';
  
  // import logo from '$lib/images/logo-philippa-white.svg';
  export let logoSrc = null;
  export let baseline = '';
  export let menuItems = [];
  $: route = $page.route.id;
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
{#if logoSrc}
<Navbar let:hidden let:toggle fluid=true
  class="!bg-transparent dark:text-white !px-0 py-base"
>
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
    ulClass="flex flex-col p-4 md:pr-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium dark:max-md:bg-teal dark:max-md:!text-white"
    activeClass="dark:max-sm:text-darkteal dark:max-sm:bg-teal-04 dark:md:font-bold"
    nonActiveClass=" dark:hover:!bg-darkteal"
  >
    {#each menuItems as item}
      <NavLi href="{item.href}" active={route === item.href} on:click={toggle}>{item.title}</NavLi>
    {/each}
  </NavUl>
  {/if}
</Navbar>
{/if}