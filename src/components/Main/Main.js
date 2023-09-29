import SignUp from '../SignUp/SignUp';
import './Main.css'

function Main({openPopup}) {
  return (
    <main className="main">
      <SignUp openPopup={openPopup} />
    </main>
  );
}

export default Main;