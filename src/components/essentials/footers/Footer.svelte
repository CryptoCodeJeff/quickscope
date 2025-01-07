<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  export let company: string = '$$Quickscope, All rights reserved'
  export let logo: string = ''

  const socials = [
    {
      name: 'twitter',
      url: 'url',
    },
    {
      name: 'whatsapp',
      url: 'url',
    },
    {
      name: 'instagram',
      url: 'url',
    },
  ]

  const links = [
    {
      title: 'About me',
      href: '',
    },
    {
      title: 'Contact',
      href: '',
    },
    {
      title: 'FAQs',
      href: '',
    },
  ]
</script>

<style lang="scss">
  .footer {
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 200px;
    background-color: var(--colorBrand);
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.5);
    border-top: 3px solid black;

    .legal-section {
      padding-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;

      transform: scale(0.85);
      font-size: 13px;
      margin-bottom: 10px;

      color: var(--colorText2);

      p {
        text-align: center;
      }
    }
  }
</style>

<div class="footer">
  <div class="legal-section">
    <p>
      $$Quickscope is a meme coin for fun, with no real value or profit expectation. By buying $$Quickscope, you agree you've read and
      understood this.
    </p>
    <div>© {new Date().getFullYear()} {company}</div>
  </div>
</div>
