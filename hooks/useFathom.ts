import * as Fathom from "fathom-client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useFathom = () => {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("MZIALJZP", {
      honorDNT: true,
      includedDomains: ["tddworkshop.com"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
};
