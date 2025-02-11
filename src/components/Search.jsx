/* eslint-disable react/prop-types */
import SearchIcon from "../../public/search.svg";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src={SearchIcon} alt="Search Icon" />

        <input type="text" placeholder="Search through thousands of movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </div>
  );
};

export default Search;
