/** Single top-level navigation item (no children) */
export interface NavItem {
  path: string
  label: string
  labelEn?: string
}

/** Nav item that can have optional sub-items (e.g. Services, Recruitment) */
export interface NavItemWithChildren extends NavItem {
  children?: NavItem[]
}

export type NavEntry = NavItem | NavItemWithChildren

export function isNavItemWithChildren(
  entry: NavEntry
): entry is NavItemWithChildren {
  return 'children' in entry && Array.isArray((entry as NavItemWithChildren).children)
}
