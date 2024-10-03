import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/book/:id" component={BookDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
