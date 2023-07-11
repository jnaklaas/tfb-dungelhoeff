<script>
  import Gallery from '$lib/components/Gallery.svelte';

  // interior gallery
  import ImgInt2 from '$lib/images/int2.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgInt3 from '$lib/images/int3.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgInt4 from '$lib/images/int4.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgInt5 from '$lib/images/int5.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgInt6 from '$lib/images/int6.jpg?w=240;1920&format=webp;avif;jpg&meta';

  // exterior gallery
  import ImgExt1 from '$lib/images/ext1.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgExt2 from '$lib/images/ext2.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgExt3 from '$lib/images/ext3.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgExt4 from '$lib/images/ext4.jpg?w=240;1920&format=webp;avif;jpg&meta';
  
  // environment gallery
  import ImgEnv1 from '$lib/images/env1.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv3 from '$lib/images/env3.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv4 from '$lib/images/env4.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv5 from '$lib/images/env5.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv9 from '$lib/images/env9.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv13 from '$lib/images/env13.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv14 from '$lib/images/env14.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv19 from '$lib/images/env19.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv23 from '$lib/images/env23.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv24 from '$lib/images/env24.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv34 from '$lib/images/env34.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv35 from '$lib/images/env35.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv36 from '$lib/images/env36.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv38 from '$lib/images/env38.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv39 from '$lib/images/env39.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv41 from '$lib/images/env41.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv43 from '$lib/images/env43.jpg?w=240;1920&format=webp;avif;jpg&meta';
  import ImgEnv46 from '$lib/images/env46.jpg?w=240;1920&format=webp;avif;jpg&meta';
	

  const galerijVillaVigo = [ ImgExt1, ImgExt2, ImgExt3, ImgExt4];
  const galerijOmgeving = [ ImgEnv1, ImgEnv3, ImgEnv4, ImgEnv5, ImgEnv9, ImgEnv13, ImgEnv14, ImgEnv19, ImgEnv23, ImgEnv24, ImgEnv34, ImgEnv35, ImgEnv36, ImgEnv38, ImgEnv39, ImgEnv41, ImgEnv43, ImgEnv46 ];
  const galerijInterieur = [ ImgInt2, ImgInt3, ImgInt4, ImgInt5, ImgInt6 ];

</script>

<Gallery vimeo="837944024" title="Villa Vigo videotour" />
<!-- <Gallery images="{galerijVillaVigo}" title="Villa Vigo" />
<Gallery images="{galerijInterieur}" title="Villa Vigo interieur" />
<Gallery images="{galerijOmgeving}" title="Omgeving" /> -->

<!-- 
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css"
/> -->