import { useEffect } from 'react';

const FALLBACK_SITE_URL = 'https://newartourandtravels.vercel.app';

function trimTrailingSlash(url: string) {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

function getSiteUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  if (!envUrl) {
    return FALLBACK_SITE_URL;
  }

  return trimTrailingSlash(envUrl);
}

function upsertMeta(attr: 'name' | 'property', value: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, value);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

type Schema = Record<string, unknown> | Array<Record<string, unknown>>;

interface SeoProps {
  title: string;
  description: string;
  path: string;
  keywords: string;
  schema?: Schema;
}

export function Seo({ title, description, path, keywords, schema }: SeoProps) {
  useEffect(() => {
    const siteUrl = getSiteUrl();
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const pageUrl = normalizedPath === '/' ? siteUrl : `${siteUrl}${normalizedPath}`;
    const imageUrl = `${siteUrl}/favicon.jpeg`;

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'robots', 'index, follow');
    upsertMeta('name', 'author', 'Newartourandtravels');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', 'Newartourandtravels');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', pageUrl);
    upsertMeta('property', 'og:image', imageUrl);

    upsertCanonical(pageUrl);

    if (schema) {
      let schemaTag = document.querySelector('script[data-seo="json-ld"]') as HTMLScriptElement | null;

      if (!schemaTag) {
        schemaTag = document.createElement('script');
        schemaTag.setAttribute('type', 'application/ld+json');
        schemaTag.setAttribute('data-seo', 'json-ld');
        document.head.appendChild(schemaTag);
      }

      schemaTag.textContent = JSON.stringify(schema);
    }
  }, [description, keywords, path, schema, title]);

  return null;
}

export const seoSiteUrl = getSiteUrl();
