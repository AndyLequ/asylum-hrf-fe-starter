// import pieChart from '../../../assets/pie-chart.png';
// import lineGraph from '../../../assets/line-graph.png';
// import barGraph from '../../../assets/bar-graph.png';
// import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';
import barGraph from '../../../assets/bar-graph.png';
import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
      Landing Page
      {/* <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div> */}

      {/* first row */}
      <div className='max-w-6xl mx-auto p-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center'>
          <div className='w-full max-w-[400px] h-[300px]'>
            {/* bargraph */}
            <img
              src={barGraph}
              alt='Bar Graph'
              className='w-full h-full object-contain mix-blend-multiply'
            />
            <p>Search Grant Rates By Office</p>
          </div>
          {/* piechart */}
          <div className='w-full max-w-[400px] h-[245px]'>
            <img
              src={pieChart}
              alt='Pie Chart'
              className='w-full h-full object-contain p-2 mix-blend-multiply'
            />
            <p>Search Grant Rates By Nationality</p>
          </div>
          {/* linegraph */}
          <div className='w-full max-w-[400px] h-[300px]'>
            <img
              src={lineGraph}
              alt='Line Graph'
              className='w-full h-full object-contain mix-blend-multiply'
            />
            <p>Search Grant Rates Over Time</p>
          </div>
        </div>
      </div>
     
      {/* second row */}
      <div className='flex justify-evenly items-center w-full max-w-5xl mx-auto py-4 gap-4'>
        <div className='w-1/4 min-w-[200px] p-2'>
            <img
              src={paperStack}
              alt='Paper Stack'
              className='w-full h-auto object-contain'
              />

        </div>
        <div className='w-3/5 p-2 space-y-4'>
          <p>Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.</p>
            
        </div>
      </div>

      {/* third row */}
      <div className='flex justify-center mt-4'>

      </div>
    </div>
  );
};
