import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {text} from '../text';
import {hooks} from '../hooks';
import {theme} from '../constants';
import {components} from '../components';

export const PaymentSuccess: React.FC = () => {
  const navigate = hooks.useNavigate();

  const location = useLocation();
  const {pathname} = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
    };

    scrollToTop();
  }, [pathname]);

  const renderImageBackground = (): JSX.Element => {
    return (
      <img
        src={require('../assets/other/03.png')}
        alt='Sign In'
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: '50%',
          zIndex: -1,
          objectFit: 'cover',
          maxWidth: 650,
          transform: 'translateX(-50%)',
        }}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main
        className='container'
        style={{paddingTop: '14%', paddingBottom: 20}}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            alt='Success'
            src={require('../assets/other/04.png')}
            style={{width: '13.33%', height: 'auto', marginBottom: 10}}
          />
          <span
            style={{
              ...theme.fonts.LeagueSpartan_500Medium,
              fontSize: 12,
              color: theme.colors.mainColor,
            }}
          >
            Nuton
          </span>
          <img
            alt='Success'
            src='https://george-fx.github.io/nuton_api/assets/images/08.png'
            style={{width: '70%', height: 'auto'}}
          />
          <text.H2 style={{textAlign: 'center', marginBottom: 10}}>
            Congratulations!
          </text.H2>
          <text.T16
            style={{
              whiteSpace: 'pre-line',
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            Your payment is successful! {'\n'} Thank you!
          </text.T16>
          <components.Button
            title='Continue'
            onClick={() => {
              navigate('/tab-navigator');
            }}
          />
        </div>
      </main>
    );
  };

  return (
    <>
      {renderImageBackground()}
      {renderContent()}
    </>
  );
};
