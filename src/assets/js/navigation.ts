import type { NavEntry } from './types'

/** Nine main menu items matching juggaarjapankobe.com */
export const NAV_ITEMS: NavEntry[] = [
  { path: '/', label: 'ホーム', labelEn: 'Home' },
  { path: '/concept', label: 'コンセプト', labelEn: 'Concept' },
  {
    path: '/services',
    label: 'サービス・料金表',
    labelEn: 'Services',
    children: [
      { path: '/services/charter', label: 'チャーター便（軽貨物貸切便）料金表' },
      { path: '/services/posting-content', label: 'ポスティングサービス内容' },
      { path: '/services/posting-price', label: 'ポスティング料金表' },
      { path: '/services/signboard', label: '貸し看板料金表' },
    ],
  },
  {
    path: '/recruitment',
    label: '採用情報',
    labelEn: 'Recruitment',
    children: [
      { path: '/recruitment/driver', label: '神戸市北区 軽貨物ドライバー' },
      { path: '/recruitment/flex', label: '週１のみでも！午前中のみでも！ok！' },
      { path: '/recruitment/posting-staff', label: 'ポスティングスタッフ【兵庫県全域】' },
      { path: '/recruitment/sales', label: '営業セールススタッフ' },
      { path: '/recruitment/continuation', label: '継続確認セールススタッフ' },
    ],
  },
  { path: '/staff', label: 'スタッフ', labelEn: 'Staff' },
  { path: '/faq', label: 'よくある質問', labelEn: 'FAQ' },
  { path: '/company', label: '会社概要', labelEn: 'Company' },
  { path: '/blog', label: 'ブログ', labelEn: 'Blog' },
  { path: '/media', label: 'コラム', labelEn: 'Media' },
]

/** Paths for the nine main pages (one route per main menu item) */
export const MAIN_PATHS = [
  '/',
  '/concept',
  '/services',
  '/recruitment',
  '/staff',
  '/faq',
  '/company',
  '/blog',
  '/media',
] as const
