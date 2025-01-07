<script lang="ts">
  let ca = 'BviGb17hH615cwEKKRdTA9fAUEWpjRtw6ZrJQ4WkFaSd'
  let show = false

  const copy = () => {
    navigator.clipboard.writeText(ca)
    show = true

    setTimeout(() => (show = false), 1000)
  }
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;

  button {
    position: relative;
    transition: 0.3s ease !important;
    text-align: center;
    width: 100%;

    @include notDesktop {
      font-size: 10px;
    }

    &:hover {
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
      transform: scale(0.9);
    }
  }
</style>

<button class="link" on:click={copy}> CA: {show ? 'Copied to clipboard!' : ca} </button>
