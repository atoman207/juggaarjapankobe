import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { ConceptPage } from '@/pages/ConceptPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { RecruitmentPage } from '@/pages/RecruitmentPage'
import { StaffPage } from '@/pages/StaffPage'
import { FaqPage } from '@/pages/FaqPage'
import { CompanyPage } from '@/pages/CompanyPage'
import { BlogPage } from '@/pages/BlogPage'
import { ContactPage } from '@/pages/ContactPage'
import { EntryPage } from '@/pages/EntryPage'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="concept" element={<ConceptPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="recruit" element={<RecruitmentPage />} />
          <Route path="recruitment" element={<RecruitmentPage />} />
          <Route path="staff" element={<StaffPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="entry" element={<EntryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
