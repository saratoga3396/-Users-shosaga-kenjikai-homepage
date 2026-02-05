"use client";

interface OrganizationJsonLdProps {
    name: string;
    description: string;
    url: string;
    logo: string;
    address: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    telephone: string;
    faxNumber?: string;
    openingHours?: string;
    geo?: {
        latitude: number;
        longitude: number;
    };
}

export function OrganizationJsonLd({
    name,
    description,
    url,
    logo,
    address,
    telephone,
    faxNumber,
    openingHours,
    geo,
}: OrganizationJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        description,
        url,
        logo,
        address: {
            "@type": "PostalAddress",
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry,
        },
        telephone,
        ...(faxNumber && { faxNumber }),
        ...(openingHours && { openingHours }),
        ...(geo && {
            geo: {
                "@type": "GeoCoordinates",
                latitude: geo.latitude,
                longitude: geo.longitude,
            },
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

interface LocalBusinessJsonLdProps {
    name: string;
    description: string;
    url: string;
    image: string;
    address: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    telephone: string;
    priceRange?: string;
    openingHours?: string[];
    geo?: {
        latitude: number;
        longitude: number;
    };
}

export function LocalBusinessJsonLd({
    name,
    description,
    url,
    image,
    address,
    telephone,
    priceRange,
    openingHours,
    geo,
}: LocalBusinessJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": url,
        name,
        description,
        url,
        image,
        address: {
            "@type": "PostalAddress",
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry,
        },
        telephone,
        ...(priceRange && { priceRange }),
        ...(openingHours && { openingHours }),
        ...(geo && {
            geo: {
                "@type": "GeoCoordinates",
                latitude: geo.latitude,
                longitude: geo.longitude,
            },
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

interface BreadcrumbJsonLdProps {
    items: {
        name: string;
        url: string;
    }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
