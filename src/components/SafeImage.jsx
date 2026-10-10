import { useState } from "react";

// Shows a dark placeholder if an image is missing, so the layout never breaks.
export default function SafeImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return <div role="img" aria-label={alt} className={`bg-surface ${className}`} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
