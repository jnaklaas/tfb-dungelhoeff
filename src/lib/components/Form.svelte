<script>
	import { enhance } from '$app/forms';
	import Button from "./Button.svelte";
  import { FloatingLabelInput, Textarea, Label, Checkbox } from "flowbite-svelte";
  export let action, fields = undefined, submitText='Contacteer ons', color = "primary", btnColor = "whiteOutline", noMessage = false;

  const colorVariants = {
    primary: {
      label: "!text-white !bg-primary",
      input: "!text-white !border-white focus:!border-coolgray focus:!text-coolgray placeholder:text-white"
    },
    white: {
      label: "!text-coolgray !bg-white",
      input: "!text-coolgray !border-coolgray focus:!border-primary focus:!text-coolgray placeholder:text-coolgray"
    }
  }
</script>

<form {action} method="post">
  {#each fields as field}
    {#if field.type === 'hidden'}
    <input type="hidden" name={field.id} value="{field.value}"/>
    {:else}
    <FloatingLabelInput 
      style="outlined"
      class="{colorVariants[color].input} border-1 rounded-sm mb-4" 
      labelClass="{colorVariants[color].label}"
      id="{field.id}"
      name="{field.id}" 
      type={field.type ?? 'text'} 
      label={field.label ?? field.id}
      required={field.required ?? 'required'}
    />
    {/if}
  {/each}


  <!-- <Label for="message" class="{colorVariants[color].label} mb-2">Uw bericht</Label> -->
  {#if !noMessage}
  <Textarea id="message" name="message" placeholder="Uw bericht" rows="4" class="{colorVariants[color].input} bg-transparent rounded-sm border-1 border-darkteal focus:border-gold focus:!ring-0"/>  
  {/if}
  <Checkbox class="mt-4 {colorVariants[color].label}" required><span>Ik ga akkoord met de <a href="privacyverklaring" target="_blank">privacyverklaring</a>*.</span></Checkbox>
  <Button class="mt-8" type="submit" color={btnColor}>{submitText}</Button>
</form>
