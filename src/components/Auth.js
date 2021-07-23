import classes from './Auth.module.css';
import {useDispatch} from 'react-redux';
import {authActions} from '../store/index';


const Auth=()=>{
    const dispatch = useDispatch();
const submitHandler=(event)=>{
    event.preventDefault();
dispatch(authActions.logout());

}
    return(
      <main >
      <section className={classes.auth}>
          <form onSubmit={submitHandler}>
              <div>USER AUTHENTICATION</div>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="input"/>
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password"/>
              </div>
              <button>Login</button>
          </form>
      </section>
      </main>
    );
};
export default Auth;