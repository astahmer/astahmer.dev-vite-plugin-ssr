import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";

console.log("default client entry");
export async function render(pageContext: PageContextClient) {
  console.log("render default client entry");
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementById("page-view")!,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
