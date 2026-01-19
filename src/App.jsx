import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import Home from './pages/Home';
import ClusterCin from './pages/ClusterCin';
import Usage from './pages/Usage';
import Services from './pages/Services';
import Dashboard from './pages/Dashboard';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';

// Theory Pages
import TheoryIntro from './pages/Theory/TheoryIntro';
import TheoryParts from './pages/Theory/TheoryParts';
import TheoryUnix from './pages/Theory/TheoryUnix';
import TheoryBatch from './pages/Theory/TheoryBatch';
import TheoryData from './pages/Theory/TheoryData';
import TheorySoftware from './pages/Theory/TheorySoftware';

// User Guide Pages
import UserGuideMain from './pages/UserGuide/UserGuideMain';
import UserGuideRunning from './pages/UserGuide/UserGuideRunning';
import UserGuidePython from './pages/UserGuide/UserGuidePython';
import UserGuideSingularity from './pages/UserGuide/UserGuideSingularity';
import UserGuideMultiNode from './pages/UserGuide/UserGuideMultiNode';
import UserGuideSharing from './pages/UserGuide/UserGuideSharing';
import UserGuidePortability from './pages/UserGuide/UserGuidePortability';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/cluster" element={<ClusterCin />} />
          <Route path="/usage" element={<Usage />} />
          
          {/* Theory Routes */}
          <Route path="/theory/intro" element={<TheoryIntro />} />
          <Route path="/theory/parts" element={<TheoryParts />} />
          <Route path="/theory/unix" element={<TheoryUnix />} />
          <Route path="/theory/batch" element={<TheoryBatch />} />
          <Route path="/theory/data" element={<TheoryData />} />
          <Route path="/theory/software" element={<TheorySoftware />} />
          
          <Route path="/services" element={<Services />} />
          
          {/* User Guide Routes */}
          <Route path="/guides/main" element={<UserGuideMain />} />
          <Route path="/guides/running-code" element={<UserGuideRunning />} />
          <Route path="/guides/python" element={<UserGuidePython />} />
          <Route path="/guides/singularity" element={<UserGuideSingularity />} />
          <Route path="/guides/multinode" element={<UserGuideMultiNode />} />
          <Route path="/guides/sharing-data" element={<UserGuideSharing />} />
          <Route path="/guides/portability" element={<UserGuidePortability />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
