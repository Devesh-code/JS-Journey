import React, { useState, useEffect } from "react";
import _ from "lodash";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Simulate an API call to fetch results
  const fetchResults = (searchQuery) => {
    // Simulate API response
    const mockResults = [
      "React",
      "React Native",
      "Redux",
      "Node.js",
      "Express.js",
      "MERN Stack",
      "JavaScript",
    ];

    // Filter mock results based on search query
    const filteredResults = mockResults.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setResults(filteredResults);
  };

  // Create a debounced function that delays the API call
  const debouncedFetchResults = _.debounce((searchQuery) => {
    fetchResults(searchQuery);
  }, 5000); // 500ms delay
  // I changed the delay to 5000ms to make it easier to see the effect

  // Handle input changes
  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    // Call the debounced function with the search query
    debouncedFetchResults(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
