
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


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

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
    window.location.href = 'https://www.humanrightsfirst.org/';
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
      
      {/* <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div> */}

      {/* first row */}
      <div className='max-w-6xl mx-auto pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center'>
          <div className='w-full max-w-[400px] flex flex-col'>
            <div className='h-[300px] flex-1'>
              {/* bargraph */}
              <img
                src={barGraph}
                alt='Bar Graph'
                className='w-full h-full object-contain mix-blend-multiply'
              />

            </div>
              <p className='text-center mt-4'>Search Grant Rates By Office</p>
          </div>
          {/* piechart */}
          <div className='w-full max-w-[400px] flex flex-col'>
            <div className='h-[300px] flex-1 p-16'>
              <img
                src={pieChart}
                alt='Pie Chart'
                className='w-full h-full object-contain p-2 mix-blend-multiply'
              />
            </div>
            <p className='text-center mt-4'>Search Grant Rates By Nationality</p>
          </div>
          {/* linegraph */}
          <div className='w-full max-w-[400px] flex flex-col'>
            <div className='h-[300px] flex-1'>
              <img
                src={lineGraph}
                alt='Line Graph'
                className='w-full h-full object-contain mix-blend-multiply'
              />
            </div>
            <p className='text-center mt-4'>Search Grant Rates Over Time</p>
          </div>
        </div>


        {/* buttons, no working logic applied to them. */}
        <div className='flex gap-4 justify-center'>

          <button className='bg-gray-400 text-white px-4 py-2 mt-8' onClick={scrollToTop}>
            View the Data
          </button>
          <button className='bg-gray-400 text-white px-4 py-2 mt-8' onClick={downloadCSV}>
            Download the Data
          </button>

        </div>
      </div>
     
      {/* second row */}
      <div className='flex justify-evenly items-center w-full max-w-5xl mx-auto py-4 gap-4'>
        <div className='w-1/2'>
            <img
              src={paperStack}
              alt='Paper Stack'
              className='w-full h-auto object-cover rounded-lg'
              />

        </div>
        <div className='w-3/5 p-2 space-y-4'>
          <p>Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.</p>
            
        </div>
      </div>

      {/* third row */}
      <div className='flex flex-col items-center mt-4'>
        <h1 className='text-5xl mb-4 p-8'>System Disparity Insights</h1>
        <div className='flex gap-4 w-full'>
          <div className='flex flex-col items-center mt-4 flex-1 w-full min-w-0'>
            <h2 className='text-5xl w-full'>
              36%
            </h2>
            <p className='p-8'>
              By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>
          <div className='flex flex-col items-center mt-4 flex-1 w-full min-w-0'>
            <h2 className='text-5xl'>
              5%
            </h2>
            <p className='p-8 w-full'>
              The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
            </p>
          </div>
          <div className='flex flex-col items-center mt-4 flex-1 w-full min-w-0'>
            <h2 className='text-5xl'>
              6x Lower
            </h2>
            <p className='p-8 w-full'>
              Between fiscal year 201 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
            </p>
          </div>
        </div>
        <button className='bg-gray-400 text-white px-4 py-2 mt-8' onClick={handleReadMore}>
          Read More
        </button>

        {/* back to top button */}
        <button className='text-black px-4 py-2 mt-8' onClick={scrollToTop}>
          Back to Top ^
        </button>
      </div>
    </div>
  );
};
