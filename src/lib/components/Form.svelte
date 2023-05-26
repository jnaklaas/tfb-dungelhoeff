<script>
	import Button from "./Button.svelte";
  import { FloatingLabelInput, Textarea, Label, Checkbox } from "flowbite-svelte";
  export let action, fields = undefined, submitText, color = "coolgray", noMessage = false;

  const colorVariants = {
    coolgray: {
      label: "!text-darkteal !bg-coolgray",
      input: "!text-darkteal !border-darkteal focus:!border-gold focus:!text-gold placeholder:text-darkteal"
    },
    gold: {
      label: "!text-darkteal !bg-gold",
      input: "!text-darkteal"
    },
    teal: {
      label: "!text-darkteal !bg-gold",
      input: "!text-darkteal"
    },
    white: {
      label: "!text-darkteal !bg-white",
      input: "!text-darkteal !border-darkteal focus:!border-gold focus:!text-gold placeholder:text-darkteal"
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


  <Label for="message" class="{colorVariants[color].label} mb-2">Uw bericht</Label>
  {#if !noMessage}
  <Textarea id="message" name="message" placeholder="Uw bericht" rows="4" class="{colorVariants[color].input} bg-transparent rounded-sm border-1 border-darkteal focus:border-gold focus:!ring-0"/>  
  {/if}
  <Checkbox class="mt-4" required><span>Ik ga akkoord met de <a href="privacyverklaring" target="_blank" class="text-gold font-bold underline">privacyverklaring</a>*.</span></Checkbox>
  <Button class="mt-8" type="submit">{submitText ?? 'Contacteer ons'}</Button>
</form>
