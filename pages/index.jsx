import Image from 'next/image';

export default function Home() {
  return (
    <div>
      Monochrome
      <picture>
        <img src="/images/banners/banner.png" alt="banner" />
      </picture>
      <button className="buton button-primary button-large">
        <a href="/">View all</a>
      </button>
      <button class="button button-inverted">
        <a href="/">View all</a>
      </button>
      <button class="button button-small">
        <a href="/">Submit</a>
      </button>
      <a class="button button-primary">New in</a>
    </div>
  );
}
