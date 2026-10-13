/**
 * schema.org JSON-LD builders.
 *
 * BaseLayout renders one `@graph` per page. Every page gets a WebPage node
 * (and a BreadcrumbList off the homepage) that references the Organization
 * and WebSite by `@id`. The full Organization and WebSite nodes are published
 * on the homepage only, per Google's guidance for Organization markup; other
 * pages carry name-and-URL stubs under the same `@id`s.
 *
 * Page-specific data (services, projects) comes from the same content objects
 * the pages render, so the markup always matches what's visible.
 * Undefined properties are dropped by JSON.stringify.
 */
import { PROJECTS, SERVICES } from '@components/sections/content';

type Node = Record<string, unknown>;

export type WebPageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';

const abs = (path: string, site?: URL) => new URL(path, site).href;
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const orgId = (site?: URL) => `${abs('/', site)}#organization`;
export const websiteId = (site?: URL) => `${abs('/', site)}#website`;
const serviceId = (title: string, site?: URL) => `${abs('/services/', site)}#${slug(title)}`;

const orgRef = (site?: URL) => ({ '@id': orgId(site) });

const stanford = {
  '@type': 'CollegeOrUniversity',
  name: 'Stanford University',
  url: 'https://www.stanford.edu',
};

// Stanford's own locations, where SWS clients are. Kept to university sites so
// it doesn't read as serving the wider region.
const place = (locality: string) => ({
  '@type': 'Place',
  name: `${locality}, CA`,
  address: { '@type': 'PostalAddress', addressLocality: locality, addressRegion: 'CA', addressCountry: 'US' },
});
const areaServed = [
  place('Stanford'),
  place('Redwood City'), // Stanford Redwood City campus
  place('Palo Alto'), // Stanford Medicine, Stanford Research Park
  place('Menlo Park'), // SLAC
];

// Who each Service is for. Organization has no `audience` property, so this
// lives on the Service nodes only.
const audience = {
  '@type': 'Audience',
  audienceType: 'Stanford University schools, departments, and organizations',
};

export function organizationNode(site: URL | undefined, logoUrl: string): Node {
  return {
    '@type': 'Organization',
    '@id': orgId(site),
    name: 'Stanford Web Services',
    alternateName: 'SWS',
    url: abs('/', site),
    logo: logoUrl,
    description:
      'Stanford Web Services is Stanford University’s in-house digital agency, providing strategy, design, engineering, and ongoing support for the websites and web applications of Stanford’s schools, departments, and organizations.',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Stanford University IT',
      url: 'https://uit.stanford.edu',
      parentOrganization: stanford,
    },
    address: {
      '@type': 'PostalAddress',
      // University Hall, Stanford Redwood City campus.
      name: 'University Hall',
      streetAddress: '485 Broadway',
      addressLocality: 'Redwood City',
      addressRegion: 'CA',
      postalCode: '94063',
      addressCountry: 'US',
    },
    areaServed,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: abs('/contact/', site),
      availableLanguage: 'English',
    },
    knowsAbout: [
      'Web design',
      'Web development',
      'User experience research',
      'Digital strategy',
      'Information architecture',
      'Design systems',
      'Web accessibility',
      'Drupal',
      'Content management systems',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Stanford Web Services offerings',
      url: abs('/services/', site),
      itemListElement: SERVICES.map(({ title }) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', '@id': serviceId(title, site), name: title },
      })),
    },
  };
}

/**
 * Minimal Organization and WebSite nodes for pages other than the homepage.
 * Crawlers read each page's graph on its own and don't follow an `@id` to
 * another page, so the references on these pages need a name to land on.
 */
export function organizationStub(site?: URL): Node {
  return { '@type': 'Organization', '@id': orgId(site), name: 'Stanford Web Services', url: abs('/', site) };
}

export function websiteStub(site?: URL): Node {
  return { '@type': 'WebSite', '@id': websiteId(site), name: 'Stanford Web Services', url: abs('/', site) };
}

export function websiteNode(site?: URL): Node {
  return {
    '@type': 'WebSite',
    '@id': websiteId(site),
    name: 'Stanford Web Services',
    alternateName: 'SWS',
    url: abs('/', site),
    inLanguage: 'en',
    publisher: orgRef(site),
  };
}

interface WebPageOptions {
  type: WebPageType;
  url: string;
  name: string;
  description: string;
  imageUrl: string;
  hasBreadcrumb: boolean;
  mainEntity?: Node;
}

export function webPageNode(site: URL | undefined, opts: WebPageOptions): Node {
  return {
    '@type': opts.type,
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'en',
    isPartOf: { '@id': websiteId(site) },
    about: orgRef(site),
    publisher: orgRef(site),
    primaryImageOfPage: { '@type': 'ImageObject', url: opts.imageUrl },
    breadcrumb: opts.hasBreadcrumb ? { '@id': `${opts.url}#breadcrumb` } : undefined,
    mainEntity: opts.mainEntity,
  };
}

export function breadcrumbNode(site: URL | undefined, url: string, name: string): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/', site) },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  };
}

/** mainEntity for /services/: the four service areas and what each includes. */
export function servicesList(site?: URL): Node {
  return {
    '@type': 'ItemList',
    name: 'Stanford Web Services service areas',
    itemListElement: SERVICES.map(({ title, body, items }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        '@id': serviceId(title, site),
        name: title,
        description: body,
        provider: orgRef(site),
        areaServed,
        audience,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: title,
          itemListElement: items.map(({ service }) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: service },
          })),
        },
      },
    })),
  };
}

/** mainEntity for /work/: every portfolio project, with awards where earned. */
export function projectsList(site?: URL): Node {
  return {
    '@type': 'ItemList',
    name: 'Stanford Web Services portfolio',
    itemListElement: PROJECTS.map(({ title, description, ctaHref, awards }, index) => {
      const awardNames = [awards ?? []].flat().map(({ alt }) => alt).filter(Boolean);
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: title,
          description,
          creator: orgRef(site),
          url: ctaHref,
          award: awardNames.length ? awardNames : undefined,
        },
      };
    }),
  };
}
