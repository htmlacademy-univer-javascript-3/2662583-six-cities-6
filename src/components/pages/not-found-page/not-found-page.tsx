
import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element{
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>404</h1>
          <p style={{ fontSize: '24px', marginBottom: '30px' }}>
            Page not found
          </p>
          <Link
            to="/"
            style={{
              fontSize: '18px',
              textDecoration: 'underline'
            }}
          >
            Go to main page
          </Link>
        </div>
      </main>
    </div>

  );
}

export default NotFoundPage;
