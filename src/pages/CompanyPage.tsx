import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import { RelatedPostsAndTags } from '@/components/RelatedPostsAndTags'
import styles from './CompanyPage.module.css'

// Import images - using correct images from reference site
import heroImg from '@/assets/image/hero_company_ref.jpg'
import companyBuildingImg from '@/assets/image/company.jpg'
import conceptDriverImg from '@/assets/image/concept_driver.jpg'
import heroBlogImg from '@/assets/image/hero_blog.jpg'
import heroContactNewImg from '@/assets/image/hero_contact_new.jpg'
import post4Img from '@/assets/image/post4.jpg'

export function CompanyPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="会社概要"
        backgroundImage={heroImg}
        breadcrumbs={[
          { label: '神戸市の配送は株式会社Juggaar Japan', path: '/' },
          { label: '会社概要' },
        ]}
      />

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <span className="englishSectionLabel">CORPORATE PHILOSOPHY</span>
          <h2 className={`${styles.sectionTitle} pageSubtitleJapanese`}>
          経営理念
          </h2>
          <div className="sectionTitleUnderline" aria-hidden="true" />
          <div className={styles.philosophyContent}>
            <p>
                人々の幸福と生活の向上に関われる企業

                お客様・取引先・地域社会に信頼される、誠実な企業

                自己の向上につとめ常に意欲的に前進する企業


                個々の仕事内容のクオリティや
                一挙手一投足が求められる時代。

                わたしたち　Juggaar Japan　は

                お仕事をできる有り難みを理解し
                個々のブランディングを意識し
                誠実に取り組む事をお約束します。

                また、雇用を生み出すことで、社会や経済の発展に寄与し
                当社を自己実現の場として活用してもらい
                Staff・パートナーとその家族の生活を豊かにします。

                ジュガールとは…

                ” 自分の枠を超えた発想で
                物事を考え可能にするための解決策 ”

                ” 決してあきらめない ”
                ” 自分を抑えつけない ”
                ” セルフ・エフィカシー（自己効力感）を大事に育てていく ”


                過労やパンデミックが社会問題として注目される今
                企業の労働時間短縮や会社のあり方を再検討される
                動きが急加速中です。

                その流れからStaffの労働時間を短縮しようと
                業務をアウトソーシングする企業が急増しています。

                現代の経済状況の中で生き残るために
                委託元の会社と互いに協力し合い
                winwinの関係を築くことが大切だと考えております。

                最後までお読み頂き有り難うございます。
                今後とも、何卒よろしくお願い申し上げます。
            </p>
          </div>
        </div>
      </section>
      <section className={styles.companyIntroSection}>
        <div className={styles.container}>
          <span className="englishSectionLabel">COMPANY</span>
          <div className={styles.companyIntroText} style={{ color: 'var(--primary-blue)', textAlign: 'center', lineHeight: 2, fontSize: '1.1rem', fontFamily: 'var(--font-family-jp-serif)' }}>
            神戸市周辺エリアで丁寧・迅速な軽貨物宅配や
            <br />
            ポスティングや看板などアナログを駆使した広告代理業
            <br />
            グラフィックデザイン・WEBデザイン制作事業
            <br />
            BPO事業（事業開発・営業支援）など多岐に渡って
            <br />
            需要のある商材・サービスを 提供している会社です
          </div>
        </div>
      </section>
      {/* Juggaar Meaning Section */}
      <section className={styles.meaningSection}>
        <div className={styles.container}>
          <div className={styles.meaningRow}>
            <div className={styles.meaningImage}>
              <img src={companyBuildingImg} alt="株式会社Juggaar Japan 社屋" />
            </div>
            <div className={styles.meaningText}>
             
              <p>
              地域社会への貢献を目指す神戸市の会社として、神戸市周辺を対象とし
              た軽貨物宅配サービスを行っております。
              お客様からお預かりする大切なお荷物を、安全・迅速に個人宅様や
              企業様へお届けいたします。
              BPO事業（事業開発・営業支援）では
              コスト削減・経営戦力の実現で業績向上や事業拡大をより高いスピード感で遂行します
              ポスティングや看板などアナログを駆使した広告代理業では
              地元神戸市の企業様と寄り添いながら1枚1枚のチラシを誠実に確実にお届けしております
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <h3 className={styles.infoTitle}>会社概要</h3>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社Juggaar Japan　ジュガールジャパン</td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td>
                  <a href="tel:0789870902">078-987-0902</a>
                </td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  〒651-1312<br />
                  兵庫県神戸市北区有野町有野７９８−４
                </td>
              </tr>
              <tr>
                <th>営業所</th>
                <td>神戸市北区八多町<br />加古川市平岡町</td>
              </tr>
              <tr>
                <th>営業時間</th>
                <td>10:00 〜 19:00</td>
              </tr>
              <tr>
                <th>定休日</th>
                <td>日曜日・祝日</td>
              </tr>
              <tr>
                <th>クレジットカード</th>
                <td>VISA、Mastercard、JCB、American Express、Diners Club</td>
              </tr>
              <tr>
                <th>代表取締役 / CEO</th>
                <td>加納 侑青</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>（令和元年） 2019年 11月 7日</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>1,170,000円</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>
                  <ul>
                    <li>貨物軽自動車運送業</li>
                    <li>BPO事業（事業開発・営業支援）</li>
                    <li>営業、経営及び販売に関するコンサルティング業</li>
                    <li>不動産の保有、売買、賃貸借、仲介及び管理</li>
                    <li>ドローンを利用した撮影に関する企画</li>
                    <li>出版物、写真、画像等のデザイン、制作及び編集、広告業</li>
                    <li>制作及び販売</li>
                    <li>労働者派遣事業</li>
                    <li>インターネット、その他の通信を利用した通信販売業</li>
                    <li>各種イベント企画、運営及びサポート業務</li>
                    <li>前各号に付帯する一切の業務</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>取引先金融機関</th>
                <td>
                  三井住友銀行　藤原台支店<br />
                  中兵庫信用金庫　神戸北支店<br />
                  神戸信用金庫　中央支店
                </td>
              </tr>
              <tr>
                <th>沿革</th>
                <td>
                  <ul className={styles.historyList}>
                    <li>2019 /11 加納代表 1名でstart</li>
                    <li>2019 /12 staff合計 4名</li>
                    <li>2020 /12 staff合計 11名</li>
                    <li>2021 / 1 staff合計 17名</li>
                    <li>2021 / 6 staff合計 22名</li>
                    <li>2022 / 3 staff合計 35名　内)正社員3名</li>
                    <li>2023 / 9 staff合計 48名</li>
                    <li>2024 / 7 staff合計 56名</li>
                    <li>2024 /11 合同会社から株式会社へ組織変更</li>
                    <li>2024 /11 staff合計 72名</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Map Section - full width, satellite style, correct address pin, link to Google Maps */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h3 className={styles.mapTitle}>アクセス</h3>
        </div>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps?q=%E5%85%B5%E5%BA%93%E7%9C%8C%E7%A5%9E%E6%88%B8%E5%B8%82%E5%8C%97%E5%8C%BA%E6%9C%89%E9%87%8E%E7%94%BA%E6%9C%89%E9%87%8E%EF%BC%97%EF%BC%99%EF%BC%98%EF%BC%8D%EF%BC%94&z=17&t=k&output=embed&hl=ja"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="会社所在地 〒651-1312 兵庫県神戸市北区有野町有野７９８−４"
          />
        </div>
      </section>

      {/* ACCESS Section - concept page style: two columns, driver image + recruitment text */}
      <section className={styles.accessSection}>
        <div className={styles.container}>
          <h2 className={styles.accessHeading}>ACCESS</h2>
          <p className={styles.accessSubheading}>
            神戸市周辺で実績豊富な地域密着型の配送・集荷サービス
          </p>
          <div className={styles.accessRow}>
            <div className={styles.accessImage}>
              <img src={conceptDriverImg} alt="軽貨物ドライバー" />
            </div>
            <div className={styles.accessText}>
              <h3>正社員としてご活躍いただける軽貨物ドライバーを募集しています</h3>
              <p>
                拠点を構える神戸市を中心に県内全域で軽貨物配送を手掛ける兵庫県の運送会社として、常に｢お客様ファースト｣の配達・集荷サービスを行っております。
                配達の技術レベルに秀でた軽貨物ドライバーによる安全・丁寧・スピーディーな宅配事業は、兵庫県内の多くのお客様からご好評を頂戴しております。
              </p>
              <p>
                地域貢献を目指す会社として、お客様にご満足いただける宅配サービスを追求してまいります。
                大手企業との取引実績も豊富な運送会社として、配達スキルと接客マナーを併せ持ったドライバーを揃えております。
              </p>
              <p>
                兵庫県内の軽貨物配達に関するお客様の多様なニーズに柔軟に対応いたしますので、宅配をご希望の際にはお気軽にご相談ください。
                法人・個人のお客様からのご依頼をお待ちしております。
              </p>
              <p>
                現在、兵庫県内で個人宅・企業への軽貨物配達を担ってくださる正社員ドライバーを募集しております。
                宅配経験者の方はもちろんのこと、未経験者の方もご応募いただける求人です。
              </p>
              <p>
                普通自動車免許をお持ちで、スマートフォン等の機械操作に抵抗のない方であれば、年齢・性別を問わずにご活躍いただけるお仕事です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE Section - two blocks (image + text), same style as ACCESS/concept */}
      <section className={styles.profileSection}>
        <div className={styles.container}>
          <h2 className={styles.profileHeading}>PROFILE</h2>
          <p className={styles.profileSubheading}>
            誠実な宅配サービスで地域社会に貢献することを目指します
          </p>

          <div className={styles.profileBlock}>
            <div className={styles.profileBlockRow}>
              <div className={styles.profileBlockImage}>
                <img src={heroBlogImg} alt="兵庫エリアの宅配" />
              </div>
              <div className={styles.profileBlockText}>
                <h3>安心の軽貨物宅配で兵庫エリアの配達ニーズに応えます</h3>
                <p>
                  軽貨物輸送のお仕事をお任せするなら、地元で実績が豊富なプロフェッショナルに依頼したい、というようなお客様のお声にしっかりお答えしております。
                  スタッフ一人ひとりの努力が、お客様にご満足いただけるような、クオリティーの高いサービスに繋がっております。
                </p>
                <p>
                  大手の企業様からお仕事をいただくなど、拠点を置く地域で着実に実績を積み重ねておりますが、現状に甘んじることなく、今後もクオリティーの高いサービスを継続できるよう、スタッフ一同が更なる努力を重ねてまいります。
                </p>
                <p>
                  何か運びたい軽貨物がありましたら、どのようなものでも一度ご相談ください。
                  難しくニッチなご要望にも、可能な限りフレキシブルに対応できるよう、これまで培ってきたノウハウを活かして尽力いたします。
                </p>
                <p>
                  また、お客様のご要望にしっかりとお応えしていくためには、新たなスタッフの力が必要です。
                  物流に関わるお仕事をお任せするドライバーを正社員として積極的に募集しております。
                  お客様からお預かりした大切なお荷物を目的地まで運ぶ仕事で、地域社会に貢献したいとお考えの方は、ぜひお気軽に担当者までお問い合わせください。
                </p>
              </div>
            </div>
          </div>

          <div className={styles.profileBlock}>
            <div className={styles.profileBlockRow}>
              <div className={styles.profileBlockImage}>
                <img src={heroContactNewImg} alt="オフィスでの業務" />
              </div>
              <div className={styles.profileBlockText}>
                <p>
                  軽貨物自動車による宅配事業を手掛ける配送会社として、神戸市を中心とした兵庫県全エリアの個人宅・企業などにお客様の大切なお荷物をお届けいたします。
                  個人・法人のお客様の幅広い宅配ニーズに対応しておりますので、小口注文から大口注文まで、何でもお任せください。
                </p>
                <p>
                  地域に根差した物流サービスを行う会社として、お客様にご満足いただけるよう｢丁寧・迅速な配達｣と｢明るく礼儀正しい接客｣を常に心掛けております。
                  お客様のご希望を詳細にお聞きした上で、最適な宅配プランをご提案してまいります。また、宅配サービス以外にも、グラフィックデザインやWEBデザインの制作、ドローンを使った空撮、物販の企画から開発まで、多岐に亘る事業を手掛けておりますので、｢お仕事の外注ニーズ｣にも喜んで対応いたします。
                </p>
                <p>
                  現在、軽貨物ドライバー職の求人を行っております。
                  軽貨物配送を神戸市をはじめとした兵庫県内の広いエリアで担ってくださる方を募集しております。
                  宅配未経験であっても、やる気のある方であれば歓迎いたします。
                  入社後に一から丁寧に指導してまいりますので、経験・性別・年齢を問わずに多くの方のご応募をお待ちしております。
                  皆様も、地域貢献を実感できる軽貨物ドライバーとして活躍してみませんか。
                </p>
              </div>
            </div>
          </div>

          <div className={styles.profileCtaRow}>
            <Link to="/recruit" className={styles.profileCtaButton}>
              <span className={styles.profileCtaArrow}>&gt;</span>
              株式会社ジュガールジャパンをもっと見る
            </Link>
          </div>
        </div>
      </section>

      {/* Same Category Section - single card, same style as concept/related */}
      <section className={styles.sameCategorySection}>
        <div className={styles.container}>
          <h3 className={styles.sameCategoryTitle}>
            <span className="englishSectionLabel">SAME CATEGORY</span>
            <span className="sectionTitleJapanese">同じカテゴリーのページ</span>
          </h3>
          <div className={styles.sameCategoryGrid}>
            <Link to="/company" className={styles.sameCategoryCard}>
              <div className={styles.sameCategoryCardImage}>
                <img src={post4Img} alt="株式会社ジュガールジャパン" />
              </div>
              <div className={styles.sameCategoryCardText}>
                <span className={styles.sameCategoryCardTitle}>株式会社ジュガールジャパン</span>
                <span className={styles.sameCategoryCardDesc}>軽貨物自動車による物流・運送業務を主に神戸市エリアで担う配送会社として、地域の皆様にご利用いただいております。</span>
              </div>
            </Link>
          </div>

        </div>
      </section>

      <RelatedPostsAndTags />
    </div>
  )
}

export default CompanyPage
