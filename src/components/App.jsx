import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer'
import Modal from './Modal'
import OrderSummary from './OrderSummary';

const App = () => {
  const [order, setOrder] = useState([])
  const [openModal, setOpenModal] = useState(false)

  return (
    <React.Fragment>
      <Header order={order} setOpenModal={setOpenModal} openModal={openModal}/>
      <MainContent setOrder={setOrder}/>
      <Footer />
      {!!openModal && (
        <Modal>
          <OrderSummary order={order} />
        </Modal>
      )}
    </React.Fragment>
  );
}
 
export default App;