import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state/index'
import Header from '../Common/Header'

const Shop = () => {
  const amount = useSelector(state => state.amount)
  const dispatch = useDispatch()
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
  return (<>
    <Header />
    <section>
        <div className="container">
          <h2 className="bg-info m-auto my-5 text-center text-dark w-50">Redux</h2>
          <div className='row'>
            <div className="col-md-6 offset-3 text-center my-3">
              <h2>Deposit/Withdraw Money</h2>
              <button className="btn btn-primary m-4" onClick={() => withdrawMoney(100)}>-</button>
              Current Balance {amount} Rs.
              <button className="btn btn-primary m-4" onClick={() => depositMoney(100)}>+</button>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Shop