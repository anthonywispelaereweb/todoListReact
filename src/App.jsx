import TodoFeature from './components/TodoFeature';
import TodoProvider from './components/TodoProvider';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <TodoProvider>
      <TodoFeature />
      <Analytics />
      <SpeedInsights />
    </TodoProvider>
  );
}

export default App;