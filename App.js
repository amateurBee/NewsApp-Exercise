import HomePage from './pages/homepage/homepage.component'
import SignInPage from './pages/signin/signin-page.component'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div id="app-component">
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={SignInPage} />
    </div>
  );
}
export default App;