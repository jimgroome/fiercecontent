import Script from "next/script";

const containerId = "GTM-P86CBR35";
const containerUrl = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;

export function GoogleTagManager() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      <noscript>
        <iframe
          title="Google Tag Manager"
          src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
          width={0}
          height={0}
          hidden
        />
      </noscript>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

            const container = document.createElement("script");
            container.async = true;
            container.src = ${JSON.stringify(containerUrl)};
            document.head.appendChild(container);
          })();
        `}
      </Script>
    </>
  );
}
