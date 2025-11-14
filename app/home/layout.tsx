import React, { Suspense } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Suspense fallback={<p>Yükleniyor...</p>}>{children}</Suspense>
    </>
  );
};

export default layout;
