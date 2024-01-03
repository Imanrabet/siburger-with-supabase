import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Create from './pages/Create';
import Home from './pages/Home';
import Update from './pages/Update';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>سی برگر</h1>
        <Link to="/">خانه</Link>
        <Link to="/create">ایجاد محصول</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
