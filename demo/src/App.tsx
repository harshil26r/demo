import { ThemeProvider } from "@/components/theme-provider";
import { DemoSection } from "@/components/demo-section";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <DemoSection />
    </ThemeProvider>
  );
}

export default App;
