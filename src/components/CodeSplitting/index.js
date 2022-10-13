import React, { useState, Suspense } from 'react';
import Loadable from 'react-loadable';
import Loader from './Loader';
import Header from '../Common/Header';
import Wrapper from '../../assets/wrappers/CodeSplitting'

// this is an example of CodeSplitting
const OtherComponents = Loadable({
    loader: () => import('./OtherComponents'),
    loading: Loader
});

const CodeSplitting = () => {
    const [showComponent, setShowComponent] = useState(false);

    return (<>
        <Header />
        <Wrapper>
        {(showComponent)?<OtherComponents />:
            <section>
                <div className="container">
                    <div className="col-md-6 offset-3">
                        <button className='btn btn-secondary' onClick={() => setShowComponent(true)}>Click me to load another Component</button>
                    </div>
                </div>
            </section>}
        </Wrapper>
        </>
    );
}

// this is another example of CodeSplitting
/* const OtherComponents = React.lazy(() => import('./OtherComponents'));

function CodeSplitting() {
  return (<>
        <Header />
        <Wrapper>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <OtherComponents />
                </Suspense>
            </div>
        </Wrapper>
    </>
  );
} */

export default CodeSplitting;

