import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Divisions from "./pages/Divisions";
import Clients from "./pages/Clients";
import Students from "./pages/Students";
import Team from "./pages/Team";
import Consulting from "./pages/divisions/Consulting";
import Investment from "./pages/divisions/Investment";
import Data from "./pages/divisions/Data";
import Education from "./pages/divisions/Education";
import BD from "./pages/divisions/BD";
import DKU from "./pages/DKU";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/DIIG-Master-Website">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/students" element={<Students />} />
          <Route path="/team" element={<Team />} />
          <Route path="/divisions/consulting" element={<Consulting />} />
          <Route path="/divisions/investment" element={<Investment />} />
          <Route path="/divisions/data" element={<Data />} />
          <Route path="/divisions/education" element={<Education />} />
          <Route path="/divisions/bd" element={<BD />} />
          <Route path="/dku" element={<DKU />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
