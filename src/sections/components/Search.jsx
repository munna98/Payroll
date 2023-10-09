import React,{useState} from "react";
import "./Search.css";

export const Search = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // const filteredData = data.filter((item) =>
  //   item.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className="search-bar">
      <i class="material-symbols-outlined ">search</i>
      <input
        type="text"
        placeholder="Search Employee"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};
