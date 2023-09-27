import Form from '../Form/Form';
import './SignUp.css'

function SignUp() {
  return (
    <div className="signup">
      <div className='signup__image'></div>
      <div className='signup__container'>
        <h1 className='signup__title'>Stay updated!</h1>
        <p className='signup__text'>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className='signup__list'>
          <li><p className='signup__text signup__item'>Product discovery and building what matters</p></li>
          <li><p className='signup__text signup__item'>Measuring to ensure updates are a success</p></li>
          <li><p className='signup__text signup__item'>And much more!</p></li>
        </ul>
      </div>
      <Form />
    </div>
  );
}

export default SignUp;