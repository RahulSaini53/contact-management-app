// App component

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './app/store';
import ContactsList from './components/ContactsList';
import CasesChart from './components/CasesChart';
import CountriesMap from './components/CountriesMap';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';

const queryClient = new QueryClient();

const App: React.FC = () => {


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="grid overflow-hidden overflow-x-hidden" >
            <Header />
            <div className="mygrid h-full w-full max-md:grid-cols-1">
            
              <div className='relative w-40 max-md:hidden'>
              <Sidebar />
              </div>
              <div className=''>
              <Routes>
                <Route path="/" element={<ContactsPage />} />
                <Route path="/maps-charts" element={<MapsAndCharts />} />
              </Routes>
              <Footer />
            </div> 
            
            </div>
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

const ContactsPage: React.FC = () => (
  <div className='min-h-[80vh] p-4 m-2 shadow-sm shadow-black'>
    <h1 className="text-2xl font-semibold mb-1 text-center text-blue-600"><span className='border-b-4 transition-all duration-500 hover:border-b-cyan-400 '>Contacts</span></h1>
    
    {/* <AddContactForm /> */}
    <ContactsList />
  </div>
);
const MapsAndCharts: React.FC = () => (
  <div className='min-h-[80vh] p-4'>
    <h1 className="text-2xl font-semibold mb-5 text-center text-blue-600"><span className='border-b-4 transition-all duration-500 hover:border-b-cyan-400 '>Maps And Charts</span></h1>
    <CasesChart />
    <CountriesMap />
  </div>
);



export default App;
