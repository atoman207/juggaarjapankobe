import styles from './PrivacyPolicyPage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function PrivacyPolicyPage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>プライバシーポリシー</h1>
                        <p className={styles.pageSubtitle}>PRIVACY POLICY</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.contentBlock}>
                        <p>
                            このページは、『株式会社Juggaar Japan』(以下、当サイトといいます)での個人情報の取り扱いについて説明しています。
                        </p>
                        <p>
                            当サイトの訪問者（以下、ユーザーといいます）の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
                        </p>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2 className={styles.sectionTitle}>基本方針</h2>
                        <p>
                            当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。
                        </p>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2 className={styles.sectionTitle}>適用範囲</h2>
                        <p>
                            本プライバシーポリシーは、ユーザーの個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
                        </p>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2 className={styles.sectionTitle}>個人情報の取得と利用目的</h2>
                        <p>
                            当サイトは、ユーザーから個人情報を取得する場合、利用目的をできる限り特定し、その目的の達成に必要な限度において個人情報を取得します。
                        </p>
                        <p>当サイトは、次の目的のため、その範囲内においてのみ、個人情報を取得・利用します：</p>
                        <ul>
                            <li>ユーザーへのサービス提供のため</li>
                            <li>ユーザーからのお問い合わせに対応するため</li>
                            <li>当サイトのサービス向上・改善のため</li>
                            <li>当サイトの利用規約や法令に違反する行為に対応するため</li>
                        </ul>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2 className={styles.sectionTitle}>個人情報の管理</h2>
                        <p>
                            当サイトは、個人情報の正確性及び安全確保のために、セキュリティ対策を徹底し、個人情報の漏えい、滅失又はき損の防止及び是正、その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                        </p>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2 className={styles.sectionTitle}>個人情報の第三者提供</h2>
                        <p>
                            当サイトは、次に掲げる場合を除いて、ユーザーの同意を得ることなく第三者に個人情報を提供することはありません：
                        </p>
                        <ul>
                            <li>法令に基づく場合</li>
                            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</li>
                        </ul>
                    </div>

                    <div className={styles.contentBlock}>
                        <h2 className={styles.sectionTitle}>お問い合わせ</h2>
                        <p>
                            個人情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。
                        </p>
                        <p>
                            <strong>株式会社Juggaar Japan</strong><br />
                            兵庫県神戸市北区有野町有野７９８−４<br />
                            TEL: 078-987-0902
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicyPage
