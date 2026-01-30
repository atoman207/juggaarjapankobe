import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import {
  HomePage,
  ConceptPage,
  ServicesPage,
  RecruitmentPage,
  StaffPage,
  FaqPage,
  CompanyPage,
  BlogPage,
  MediaPage,
} from '@/pages'
import { ServicesCharterPage } from '@/pages/ServicesCharterPage'
import { RecruitmentDriverPage } from '@/pages/RecruitmentDriverPage'
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="concept" element={<ConceptPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/charter" element={<ServicesCharterPage />} />
          <Route path="recruitment" element={<RecruitmentPage />} />
          <Route path="recruitment/driver" element={<RecruitmentDriverPage />} />
          <Route path="staff" element={<StaffPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="media" element={<MediaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
