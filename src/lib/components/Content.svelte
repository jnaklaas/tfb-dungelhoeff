<script>
	import Container from "./Container.svelte";
  import Img from '@zerodevx/svelte-img';
  import slugify from 'slugify';

  export let boxedText = false;
  export let boxColor = "primary text-white";
  export let textContentClass = '';
  export let image;
  export let imageLeft = false;
  export let imageThumb = null;
  export let imageClass = '';
  export let imagePortrait = false;
  export let imageSquare = false;
  export let imageCaption = null;
  export let lightbox = false;

  const aspectRatios = {
    landscape: 'aspect-[3/2]',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    boxed: 'aspect-[4/3]'
  }

  $: largeImg = (image && image.length > 0) ? image.pop() : '';
  $: imageAspectRatio = aspectRatios[
      imagePortrait ? 'portrait' : 
      imageSquare ? 'square' : 
      boxedText ? 'boxed' : 
      'landscape'
    ];
</script>

<section class="{$$props.class ?? ''} content mb-12 md:mb-12 xl:mb-24" id="{$$props.id || null}">
  <Container grid>

    {#if image}

    
    <div class="row-start-1 relative
      {imageLeft ? 'col-start-1' : 'col-end-13' }
      {boxedText ? 'col-span-8' : 'col-span-6 mb-4 md:mb-8 lg:mb-0' }
      {imageClass} 
    ">
      {#if lightbox}
      <div class="lightbox">
        <a
          href="{largeImg.src ?? ''}"
          target="_blank"
          rel="noreferrer"
          data-pswp-width={largeImg.width}
          data-pswp-height={largeImg.height}
        >
          <Img src={imageThumb ?? image} class="w-full { imageAspectRatio }] object-cover {imageClass} "/>
        </a>
      </div>
      {:else}
      <Img src={image} class="w-full { imageAspectRatio } object-cover {imageClass} " 
        role={ imageCaption ? "img" : null}
        aria-labelledby={ imageCaption ? slugify(imageCaption) : null }
        alt={ imageCaption ?? null }
      />
      {/if}
      {#if imageCaption}
      <div id={slugify(imageCaption)}
        class="absolute bottom-0 {imageLeft ? 'left-0' : 'right-0'} px-3 bg-gold/75"
      >{imageCaption}</div>
      {/if}
    </div>

    <div class="{textContentClass} z-10 col-span-6 row-span-2
      {imageLeft ? 'col-end-13 xl:col-start-7' : '' }
      {!imageLeft && !boxedText ? 'col-start-1 xl:col-start-2' : '' }
      {boxedText ? `bg-${boxColor} p-4 md:p-8 xl:p-12 row-start-2 md:-mt-24 xl:-mt-36` : 'row-start-1 md:mt-24 xl:col-span-5' }
    ">
      {#if $$slots.title}<h2 class="{boxedText ?'' : 'text-primary'}"><slot name="title">Default title</slot></h2>{/if}
      <slot><p>Default text</p></slot>
      {#if $$slots.cta}<div class="mt-8"><slot name="cta"/></div>{/if}
    </div>


    {:else}
    <div class="{textContentClass} col-span-10 col-start-2 2xl:col-span-8 2xl:col-start-3">
      {#if $$slots.title}<h2 class="text-primary"><slot name="title">Default title</slot></h2>{/if}
      <slot><p>Default text</p></slot>
      {#if $$slots.cta}<div class="mt-8"><slot name="cta"/></div>{/if}
    </div>
    
    {/if}

  </Container>
</section>
