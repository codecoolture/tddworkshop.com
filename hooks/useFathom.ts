import * as Fathom from "fathom-client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useFathom = () => {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("MZIALJZP", {
      includedDomains: ["tddworkshop.com"],
      url: "https://alpaca.tddworkshop.com/script.js",
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
