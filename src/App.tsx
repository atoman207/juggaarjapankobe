import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { ConceptPage } from '@/pages/ConceptPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServicesCharterPage } from '@/pages/ServicesCharterPage'
import { RecruitmentPage } from '@/pages/RecruitmentPage'
import { RecruitmentDriverPage } from '@/pages/RecruitmentDriverPage'
import { StaffPage } from '@/pages/StaffPage'
import { FaqPage } from '@/pages/FaqPage'
import { CompanyPage } from '@/pages/CompanyPage'
import { BlogPage } from '@/pages/BlogPage'
import { MediaPage } from '@/pages/MediaPage'
import { ContactPage } from '@/pages/ContactPage'
import { EntryPage } from '@/pages/EntryPage'
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage'
import { SitemapPage } from '@/pages/SitemapPage'
import { ColumnPage } from '@/pages/ColumnPage'
import { ReviewsPage } from '@/pages/ReviewsPage'
import { VoicePage } from '@/pages/VoicePage'
import { ReputationPage } from '@/pages/ReputationPage'
import { CharterPricePage } from '@/pages/CharterPricePage'
import { PostingServicePage } from '@/pages/PostingServicePage'
import { PostingPricePage } from '@/pages/PostingPricePage'
import { KashikanbanPage } from '@/pages/KashikanbanPage'
import { KobeshiDriverPage } from '@/pages/KobeshiDriverPage'
import { PostingStaffPage } from '@/pages/PostingStaffPage'
import { SalesPage } from '@/pages/SalesPage'
import { SalesKeizokuKakuninPage } from '@/pages/SalesKeizokuKakuninPage'
import { WeeklyFlexiblePage } from '@/pages/WeeklyFlexiblePage'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="concept" element={<ConceptPage />} />
          <Route path="concept/*" element={<ConceptPage />} />
          <Route path="concept/reviews" element={<ReviewsPage />} />
          <Route path="concept/voice" element={<VoicePage />} />
          <Route path="concept/reputation" element={<ReputationPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="service/charter" element={<ServicesCharterPage />} />
          <Route path="service/charterprice" element={<CharterPricePage />} />
          <Route path="service/posting-service" element={<PostingServicePage />} />
          <Route path="service/postingprice" element={<PostingPricePage />} />
          <Route path="service/kashikanban" element={<KashikanbanPage />} />
          <Route path="recruit" element={<RecruitmentPage />} />
          <Route path="recruitment" element={<RecruitmentPage />} />
          <Route path="recruit/driver" element={<RecruitmentDriverPage />} />
          <Route path="recruit/kobeshidriver" element={<KobeshiDriverPage />} />
          <Route path="recruit/postingstaff" element={<PostingStaffPage />} />
          <Route path="recruit/sales" element={<SalesPage />} />
          <Route path="recruit/saleskeizokukakunin" element={<SalesKeizokuKakuninPage />} />
          <Route path="recruit/weekly-flexible" element={<WeeklyFlexiblePage />} />
          <Route path="staff" element={<StaffPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/*" element={<BlogPage />} />
          <Route path="column" element={<ColumnPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="media/*" element={<MediaPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="entry" element={<EntryPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
