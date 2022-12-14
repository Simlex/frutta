import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Components
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';

/* Theme variables */
import './theme/variables.css';

import '@ionic/react/css/display.css'; 
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';

// Icons 
import { home as homeIcon, cart as cartIcon, list as listIcon } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/cart" component={Cart} exact={true} />
          <Route path="/products" component={Products} exact={true} />
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />}
          />
        </IonRouterOutlet>
        {/* Use the slot prop to define the position you want your bar to be positioned */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeIcon} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="products" href="/products">
            <IonIcon icon={listIcon} />
            <IonLabel>Products</IonLabel>
          </IonTabButton>
          <IonTabButton tab="cart" href="/cart">
            <IonIcon icon={cartIcon} />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
