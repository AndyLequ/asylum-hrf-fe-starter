import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState({
    yearResults: [],
    citizenshipResults: [],
  });
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });



  const baseURL = 'https://asylum-be.onrender.com'

  const getFiscalData = async () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint
    // const response = await axios.get(`${baseURL}/fiscalSummary`);

    // const fiscalDataRes = testData;
    const response = await axios.get(`${baseURL}/fiscalSummary`); 
    fiscalDataRes = response.data;
    return fiscalDataRes;
  };

  const getCitizenshipResults = async () => {
    // TODO: Replace this with functionality to retrieve the data from the citizenshipSummary endpoint
    // const testData = await axios.get(`${baseURL}/citizenshipSummary`);
    // const citizenshipRes = testData.citizenshipResults;

    const response = await axios.get(`${baseURL}/citizenshipSummary`);
    const citizenshipRes = response.data;

    return citizenshipRes;
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state
    const [fiscalData, citizenshipData] = await Promise.all([
      getFiscalData(),
      getCitizenshipResults(),
    ]);

    const updatedGraphData = {
      ...graphData,
      yearResults: fiscalData.data,
      citizenshipResults: citizenshipData,
    };
    setGraphData(updatedGraphData);
    setIsDataLoading(false);
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
