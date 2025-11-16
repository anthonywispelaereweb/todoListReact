import TodoFeature from './components/TodoFeature';
import TodoProvider from './components/TodoProvider';
import { Analytics } from "@vercel/analytics/next"
function App() {
  return (
    <TodoProvider>
      <TodoFeature />
      <Analytics />
    </TodoProvider>
  );
}

export default App;