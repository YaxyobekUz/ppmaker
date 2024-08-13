import React from "react";

const AdComponent = () => {
  return (
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{
        __html: `
        <amp-ad
          width="100vw"
          height="320"
          type="adsense"
          data-ad-client="ca-pub-8767707986475820"
          data-ad-slot="7412413827"
          data-auto-format="rspv"
          data-full-width=""
        ></amp-ad>`,
      }}
    />
  );
};

export default AdComponent;
