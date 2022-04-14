import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home/Home';
import PaymentDetails from './components/Wallet/PaymentDetails';
import ReservationHistory from './components/History/ReservationHistory';
import Settings from './components/Settings/Settings';
import Wallet from './components/Wallet/Wallet';
import UserInfo from './components/Settings/UserInfo';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import AdminHome from './components/Admin/AdminHome';
import ViewReservations from './components/Admin/ViewReservations';
import ViewTransactions from './components/Admin/ViewTransactions';
import ViewUsers from './components/Admin/ViewUsers';
import Loading from './components/Login/Loading';
import UpcomingReservation from './components/Home/UpcomingReservation';
import Payment from './components/Home/Payment';
import Receipt from './components/Home/Receipt';
import CurrentReservation from './components/Home/CurrentReservation';

const AppNavigator = createStackNavigator({
    // Loading: Loading,
    Login: Login,
    Home: Home,
    Payment: Payment,
    Receipt: Receipt,
    Upcoming: UpcomingReservation,
    Current: CurrentReservation,
    PaymentTab: PaymentDetails,
    History: ReservationHistory,
    Settings: Settings,
    Wallet: Wallet,
    BackFromWallet: PaymentDetails,
    UserInfo: UserInfo,
    BackFromUserInfo: Settings,
    LogOut: Login,
    SignUp: SignUp,
    BackFromSignUp: Login,
    
    ReservationList: ViewReservations,
    Back: AdminHome,
    TransactionList: ViewTransactions,
    UserList: ViewUsers,
    Admin: AdminHome,

});

export default createAppContainer(AppNavigator);