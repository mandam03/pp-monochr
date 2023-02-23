import Image from 'next/image';

export default function Home() {
  return (
    <div>
      Monochrome
      <picture>
        <img src="/images/banners/banner.png" alt="banner" />
      </picture>
      <button className="buton button-primary button-large"></button>
      <button class="button button-inverted"></button>
      <button class="button button-small">Submit</button>
      <a class="button button-primary">New in</a>

    </div>
  );
}
