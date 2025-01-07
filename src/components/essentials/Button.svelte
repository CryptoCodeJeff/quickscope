<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  export let text: string = ''
  export let icon: string = ''
  export let href: string = ''
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  .container {
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 3px;
    width: 300px;

    @include notDesktop {
      width: 100%;
    }

    .corners {
      --s: 10px;

      border: 2px solid rgba(255, 255, 255, 0.4);
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 10px 50px;
      align-items: center;

      -webkit-mask:
        conic-gradient(at var(--s) var(--s), #0000 75%, #000 0) 0 0 / calc(100% - var(--s)) calc(100% - var(--s)),
        linear-gradient(#000 0 0) content-box;

      .icon {
        display: flex;
        align-items: center;
        transition: 0.3s ease;
      }

      .text {
        color: rgba(255, 255, 255, 0.4);
        text-transform: uppercase;
        transition: 0.3s ease;
      }

      transition: 0.3s ease;

      &:hover {
        border: 2px solid white;

        .icon {
          :global(svg) {
            fill: white;
            transition: 0.3s ease;
          }
        }

        .text {
          color: white;
          transition: 0.3s ease;
        }

        transition: 0.3s ease;
      }
    }
  }
</style>

<a class="container" {href} target="_">
  <div class="corners">
    <div class="icon">
      <Svg name={icon} fill="rgba(255, 255, 255, 0.5)" height="30" width="30" />
    </div>
    <span class="text"> {text}</span>
  </div>
</a>
