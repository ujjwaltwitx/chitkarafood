import Header from './components/header';
import UploadForm from './components/form';
import SubHeader from './components/subHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCards from './components/allCards';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/upload">
            <UploadForm />
          </Route>
          <Route exact path="/">
            <SubHeader />
            <AllCards />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



// {/* <footer id='footer'>
//         After uploading your mess card, If any sutdent buys it, he or she will contact you for your mess card. We don't take any responsibility for the same but, as a human being, we suppose that you know how it feels to be hungry and cheated at the same time. So, we request you to be honest with the information that you provide.
//       </footer> */}