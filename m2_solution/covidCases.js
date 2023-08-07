// COVID-19 data for different countries
const covidData = [
    {
      country: "USA",
      totalCases: 2142515,
      newCases: 291,
      totalDeaths: 117533,
    },
    {
      country: "Brazil",
      totalCases: 850796,
      newCases: 0,
      totalDeaths: 42791,
    },
    {
      country: "Russia",
      totalCases: 528964,
      newCases: 8835,
      totalDeaths: 6948,
    },
    {
      country: "India",
      totalCases: 322777,
      newCases: 1151,
      totalDeaths: 9206,
    },
    {
      country: "UK",
      totalCases: 294375,
      newCases: 0,
      totalDeaths: 41662,
    },
  ];
  
  // 1. Total number of COVID-19 cases
  const totalCases = covidData.reduce((total, country) => total + country.totalCases, 0);
  console.log("Total COVID-19 cases across countries:", totalCases);
  
  // 2. Countries with no new COVID-19 cases
  const countriesWithNoNewCases = covidData.filter((country) => country.newCases === 0);
  console.log("Countries with no new COVID-19 cases:", countriesWithNoNewCases);
  
  // 3. Add a column with the percentage of deaths/total cases for each country
  covidData.forEach((country) => {
    const deathPercentage = ((country.totalDeaths / country.totalCases) * 100).toFixed(2);
    country.deathPercentage = `${deathPercentage}%`;
  });
  console.log("COVID-19 data with death percentage:", covidData);
  
  // 4. Insert new record for Spain
  const newRecordForSpain = {
    country: "Spain",
    totalCases: 300000,
    newCases: 0,
    totalDeaths: 27136,
  };
  covidData.splice(4, 0, newRecordForSpain);
  console.log("COVID-19 data with new record for Spain:", covidData);
  