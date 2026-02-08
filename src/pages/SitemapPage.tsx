import { Link as RouterLink } from 'react-router-dom'
import styles from './SitemapPage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function SitemapPage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>サイトマップ</h1>
                        <p className={styles.pageSubtitle}>SITEMAP</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <nav className={styles.sitemapNav}>
                        <ul className={styles.sitemapList}>
                            <li>
                                <RouterLink to="/">ホーム</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/concept">コンセプト</RouterLink>
                                <ul className={styles.subList}>
                                    <li><RouterLink to="/concept/reviews">口コミ情報</RouterLink></li>
                                    <li><RouterLink to="/concept/voice">お客様の声</RouterLink></li>
                                    <li><RouterLink to="/concept/reputation">評判</RouterLink></li>
                                </ul>
                            </li>
                            <li>
                                <RouterLink to="/service">サービス・料金表</RouterLink>
                                <ul className={styles.subList}>
                                    <li><RouterLink to="/service/charterprice">チャーター便（軽貨物貸切便）料金表</RouterLink></li>
                                    <li><RouterLink to="/service/posting-service">ポスティング　サービス内容</RouterLink></li>
                                    <li><RouterLink to="/service/postingprice">ポスティング　料金表</RouterLink></li>
                                    <li><RouterLink to="/service/kashikanban">貸し看板料金表</RouterLink></li>
                                </ul>
                            </li>
                            <li>
                                <RouterLink to="/recruit">採用情報</RouterLink>
                                <ul className={styles.subList}>
                                    <li><RouterLink to="/recruit/kobeshidriver">3ヶ月ごとにボーナスが !? 神戸市北区　軽貨物　ドライバー</RouterLink></li>
                                    <li><RouterLink to="/recruit/weekly-flexible">週１のみでも！午前中のみでも！午後のみでも！ok！</RouterLink></li>
                                    <li><RouterLink to="/recruit/postingstaff">ポスティングスタッフ【兵庫県全域】</RouterLink></li>
                                    <li><RouterLink to="/recruit/sales">営業　セールススタッフ</RouterLink></li>
                                    <li><RouterLink to="/recruit/saleskeizokukakunin">継続確認　セールススタッフ</RouterLink></li>
                                </ul>
                            </li>
                            <li>
                                <RouterLink to="/staff">スタッフ</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/faq">よくある質問</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/company">会社概要</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/blog">ブログ</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/column">コラム</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/media">メディア</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/contact">お問い合わせ</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/entry">エントリー</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/privacy-policy">プライバシーポリシー</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/sitemap">サイトマップ</RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default SitemapPage
