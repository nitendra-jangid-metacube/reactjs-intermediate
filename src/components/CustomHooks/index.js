import Header from '../Common/Header';
import {useBoolean} from './Boolean';

export default function CustomHooks() {
  const [isToggle, {
    setToggle,
    setTrue,
    setFalse,
  }] = useBoolean(false);

  return (
    <>
    <Header />
      <section>
        <div className="container">
            <h2 className="bg-info m-auto my-5 text-center text-dark w-50">Custom Hooks</h2>
            <div className="col-md-6 offset-3 text-center">
                <button className='btn btn-info m-2' type="button" onClick={setToggle}>
                  Toggle
                </button>
                <button className='btn btn-warning m-2' type="button" onClick={setTrue}>
                  To True
                </button>
                <button className='btn btn-danger m-2' type="button" onClick={setFalse}>
                  To False
                </button>


                <p className='text-uppercase'>{isToggle.toString()}</p>
            </div>
        </div>
      </section>
    </>
  );
}