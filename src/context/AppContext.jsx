import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import {useLocalStorage} from '../hooks/useLocalStorage';
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

  useEffect(() => {
    // Check if the data is already stored in localStorage
    console.log('Loading State', isDataLoading);
  }, [isDataLoading]);


  const baseURL = 'https://asylum-be.onrender.com'

  const getFiscalData = async () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint
    // const response = await axios.get(`${baseURL}/fiscalSummary`);
    try {
      // const fiscalDataRes = testData;
      const response = await axios.get(`${baseURL}/fiscalSummary`); 

      if(Array.isArray(response.data)) {
        // If the response is an array, return it directly
        return response.data;
      } else if (response.data.yearResults) {
        // If the response has a yearResults property, return that
        return response.data.yearResults;
      }
      console.error('Unexpected fiscal data structure:', response.data);
      return [];

    } catch (error) {
      console.error('Error fetching fiscal data:', error);
      return [];
    } 


  };

  const getCitizenshipResults = async () => {
    // TODO: Replace this with functionality to retrieve the data from the citizenshipSummary endpoint
    // const testData = await axios.get(`${baseURL}/citizenshipSummary`);
    // const citizenshipRes = testData.citizenshipResults;
    try {
      const response = await axios.get(`${baseURL}/citizenshipSummary`);
      
      if(Array.isArray(response.data)) {
        // If the response is an array, return it directly
        return response.data;
      } else if (response.data.citizenshipResults) {
        return response.data.citizenshipResults;
      }
      
      console.error('Unexpected citizenship data structure:', response.data);
      return [];

    } catch (error) {
      console.error('Error fetching citizenship data:', error);
      return [];
    }

  };

  const updateQuery = async () => {
    setIsDataLoading(true);
    await fetchData()
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state
    setIsDataLoading(true);
    try{
      const [fiscalData, citizenshipData] = await Promise.all([
            getFiscalData(),  
            getCitizenshipResults(),
          ]);

      console.log('fiscalData', fiscalData);
      console.log('citizenshipData', citizenshipData);

      // data transformation
      const transformedFiscalData = fiscalData.map(year => ({
        fiscal_year: year.fiscal_year,
        totalCases: year.total_cases,
        granted: year.granted,
        denied: year.denied,
        adminClosed: year.admin_closed,
        asylumTerminated: year.asylum_terminated,
        closedNacaraGrant: year.closedNacaragrant,
        yearData: year.yearData || []  
      }));

      const processedCitizenshipData = citizenshipData.map(country => ({
        citizenship: country.citizenship,
        totalCases: country.total_cases,
        granted: country.granted,
        denied: country.denied,
        adminClosed: country.admin_closed,
        asylumTerminated: country.asylum_terminated,
        closedNacaraGrant: country.closed_nacara_grant,
      }));

      setGraphData({
        yearResults: transformedFiscalData,
        citizenshipResults: processedCitizenshipData,
      });

    } catch (error) {
      console.error('Error fetching data:', error);
      setGraphData({
        yearResults: [],
        citizenshipResults: [],
      });
    } finally {
      setIsDataLoading(false);
    }
    

  };

  const getYears = () => {
    const results = Array.isArray(graphData.yearResults) ? graphData.yearResults : [];
    return results.map((item) => item?.fiscal_year ? Number(item.fiscal_year) : 0)
    .filter(year => !isNaN(year) && year > 0);
  }
    


  const clearQuery = () => {
    setGraphData({ yearResults: [], citizenshipResults: [] });
  };


  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchData();
  }, []);

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
