<script lang="ts">
  import { onMount } from 'svelte'
  let HTMLLogo: HTMLElement

  onMount(() => {
    console.log('BUY $Quickscope!')
    document.addEventListener('mousemove', (ev: MouseEvent) => {
      if (HTMLLogo) {
        HTMLLogo.style.boxShadow = `${ev.clientX / 50}px ${ev.clientY / 50}px 5px 5px rgba(0, 0, 0, 0.5), -${ev.clientX / 50}px -${ev.clientY / 50}px 5px 5px rgba(255, 255, 255, 0.5)`
      }
    })
  })
</script>

<style lang="scss">
  .logo {
    transition: 0.3s ease;
    display: block;
    margin: auto;
  }
</style>

<img bind:this={HTMLLogo} reveal="0.9" class="logo" src="/assets/logo.jpg" alt="logo" width="300px" height="300px" />
