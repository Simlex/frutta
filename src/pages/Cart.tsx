import { IonPage, IonContent, IonHeader, IonToolbar } from "@ionic/react";
import { FunctionComponent, ReactElement } from "react";
import customStyle from '../theme/Cart.module.scss';

interface CartProps {

}

// const Cart: FunctionComponent<CartProps> = ():ReactElement => {
const Cart: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar class={customStyle.ionToolbar} color='primary'>
                    <div className={customStyle.container}>
                        <div className={customStyle.title}>Cart</div>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={customStyle.bodyContainer}>
                    Cart
                    <p>Here</p>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Cart;