import React from 'react';
import Header from '../components/Header';
import { CountDown, EntertainmentCandidates, FinancialManagerCandidates, PresidentalCandidates, VicePresidentialCandidates } from '../components';


const Home = () => {
  

  return (
    <div>
      {/* <Header /> */}

      <div className="">
        <CountDown />
      </div>
      <div>
        <h1 className="text-2xl text-black font-semibold md:px-10  my-10 ">
          Presidential Candidates
        </h1>
        <PresidentalCandidates />
      </div>

      <div>
        <h1 className="text-2xl text-black font-semibold md:px-10  my-10 ">
          Vice Presidential Candidates
        </h1>
        <VicePresidentialCandidates />
      </div>

      <div>
        <h1 className="text-2xl text-black font-semibold md:px-10  my-10 ">
          Financial Managers Candidates
        </h1>
        <FinancialManagerCandidates />
      </div>

      <div>
        <h1 className="text-2xl text-black font-semibold md:px-10  my-10 ">
          Entertainment Candidates
        </h1>
        <EntertainmentCandidates />
      </div>
    </div>
  );
};

export default Home;
