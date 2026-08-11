import Script from 'next/script';

const NATIVE_CONTAINER_ID = 'container-3a3820f0409b51a7c83b294f24492371';

/** Adsterra Social Bar, Native Banner, and companion units */
export default function AdsterraAds() {
  return (
    <>
      <div className="w-full flex justify-center px-4 py-4" aria-label="Advertisement">
        <div id={NATIVE_CONTAINER_ID} />
      </div>
      <Script
        src={`https://pl29099928.effectivecpmnetwork.com/3a3820f0409b51a7c83b294f24492371/invoke.js`}
        strategy="lazyOnload"
        data-cfasync="false"
      />
      <Script
        src="https://pl29099926.effectivecpmnetwork.com/e4/fa/39/e4fa39b599111d9323c28a836de9f81d.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://pl29099929.effectivecpmnetwork.com/3b/e0/de/3be0de5993f9191d005b7cfa4041b60f.js"
        strategy="lazyOnload"
      />
    </>
  );
}
