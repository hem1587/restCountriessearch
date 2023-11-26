import { useEffect, useState } from "react";

import styled from "styled-components"
import Article from "./Article";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);


  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/currency/${searchText}`
      );
      const data = await res.json();
      console.log(data)
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }
  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }
  const formStyle = {

   
    textAlign: "center",
    marginTop: "20px",
  };

  const inputStyle = {
    padding: "10px",
    width: "250px",
    border: "1px solid #090808",
    borderRadius: "4px",
    marginRight: "10px",
    outline: "none",
  };
  const searchIconStyle = {
    fontSize: "20px",
    color: "#999",
  };
  
  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:"20px"
  };


  return (
    <DIV>

      {
        countries?
    <div>
      <form onSubmit={handleSearchCountry} autoComplete="off" style={formStyle}>
        <div style={inputContainerStyle}>
          
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a country by its Currency"
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={inputStyle}
          />          
        </div>
      </form>
      

       
               
       {countries.map((country,index) => (
          <Article key={index} {...country} />         
        ))}
        
    </div>:<div>Loading...</div>
}
    </DIV>

  )
}
const DIV=styled.div`
margin: auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const StyledBox = styled.div`
  width: 80%;
margin: auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: grid;
grid-template-columns: repeat(3,1fr);
padding: 5%;
gap: 5%;
`;