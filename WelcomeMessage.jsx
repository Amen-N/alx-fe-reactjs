mkdir -p src/components
touch src/components/WelcomeMessage.jsx
function WelcomeMessage() {
  return (
    <div> 
      <h1>Hello everyone, I am learning React at ALX!</h1>
      <p>This is a simple JSX component.</p>
      <p>I am learning about JSX!</p>
    </div>
    );
}

export default WelcomeMessage;
import WelcomeMessage from './components/ WelcomeMessage';
function App() {
  return (
    <>
      <WelcomeMessage />
    </>
    );
}
export default App;
npm run dev
git add
git commit -m "Add and integrate WelcomeMessage JSX component"
git push
