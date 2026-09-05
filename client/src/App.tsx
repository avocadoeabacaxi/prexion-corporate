/**
 * Design philosophy: Precision in Motion — shared navigation and page transitions keep the corporate experience coherent.
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Applications from "./pages/Applications";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LegacyPage from "./pages/LegacyPage";
import News from "./pages/News";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Resources from "./pages/Resources";
import RoiCalculator from "./pages/RoiCalculator";
import SiteMapPage from "./pages/SiteMapPage";
import Support from "./pages/Support";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/product" component={Products} />
        <Route path="/product/elite">{() => <Redirect to="/product" />}</Route>
        <Route path="/product/:slug" component={ProductDetail} />
        <Route path="/products">{() => <Redirect to="/product" />}</Route>
        <Route path="/products/:slug">{(params) => <Redirect to={`/product/${params.slug}`} />}</Route>
        <Route path="/about" component={About} />
        <Route path="/applications-by-specialty" component={Applications} />
        <Route path="/support" component={Support} />
        <Route path="/support/remote">{() => <LegacyPage sourcePath="/remote-support" />}</Route>
        <Route path="/support/training">{() => <LegacyPage sourcePath="/training-videos" />}</Route>
        <Route path="/resources" component={Resources} />
        <Route path="/news">{() => <News />}</Route>
        <Route path="/events">{() => <News eventsOnly />}</Route>
        <Route path="/roi-calculator" component={RoiCalculator} />
        <Route path="/careers">{() => <LegacyPage sourcePath="/careers-at-prexion" />}</Route>
        <Route path="/careers/apply">{() => <LegacyPage sourcePath="/apply-job" />}</Route>
        <Route path="/distributors">{() => <LegacyPage sourcePath="/distributor-locations" />}</Route>
        <Route path="/site-map" component={SiteMapPage} />
        <Route path="/contact" component={Contact} />
        <Route>{() => <LegacyPage />}</Route>
      </Switch>
      <SiteFooter />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
