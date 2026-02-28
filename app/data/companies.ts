export type CompanyInfo = {
  id: string
  logoUrl: string
  badge: string
  websiteUrl: string
  /** Fallback when primary logo fails (e.g. favicon) */
  fallbackLogoUrl?: string
}

// Favicon as fallback for companies without direct logo URLs
function faviconUrl(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
}

export const companies: Record<string, CompanyInfo> = {
  'SmartRent | Scottsdale, AZ': {
    id: 'smartrent',
    logoUrl: faviconUrl('smartrent.com'),
    fallbackLogoUrl: faviconUrl('smartrent.com'),
    badge: 'SR',
    websiteUrl: 'https://www.smartrent.com/',
  },
  'Curebase | San Francisco, CA': {
    id: 'curebase',
    logoUrl: faviconUrl('curebase.com'),
    fallbackLogoUrl: faviconUrl('curebase.com'),
    badge: 'CB',
    websiteUrl: 'https://www.curebase.com/',
  },
  'CCB Tech Group | Valdosta, GA': {
    id: 'ccb-tech',
    logoUrl: 'https://static.wixstatic.com/media/db81e4_2a42ce7eb1ce4b1087308fdea687677f.png/v1/fill/w_294,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CCB%20Logo%20Color.png',
    badge: 'CCB',
    websiteUrl: '',
  },
}

/** Get company info by name – supports exact match or leading part (e.g. "SmartRent") */
export function getCompanyInfo(companyName: string): CompanyInfo | undefined {
  const exact = companies[companyName]
  if (exact) return exact
  const key = companyName.split('|')[0]?.trim() ?? ''
  const entry = Object.entries(companies).find(([k]) => key && k.startsWith(key))
  return entry?.[1]
}
