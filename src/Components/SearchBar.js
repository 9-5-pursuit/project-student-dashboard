import React from "react";
import { middleNameInitial } from "../data/functions";

function SearchBar({
  setStudents,
  search,
  setSearch,
  searchResult,
  setSearchResult,
}) {
  const copyStudents = [...searchResult];

  // fn for filter students by search
  function searchFilter(input) {
    const str = input.toLowerCase();

    const searchedStudent = copyStudents.filter(({ names }) => {
      const studentLowerCaseMiddle = `${names.preferredName.toLowerCase()} ${middleNameInitial(
        names.middleName
      )
        .toLowerCase()
        .replace(`.`, ``)} ${names.surname.toLowerCase()}`;

      const studentLowerCaseLast = `${names.preferredName.toLowerCase()} ${names.surname.toLowerCase()}`;

      if (input === "") {
        return names;
      } else {
        return (
          studentLowerCaseMiddle.includes(str) ||
          studentLowerCaseLast.includes(str)
        );
      }
    });

    setStudents(searchedStudent);
  }

  // fn for change in search bar
  function handleSearch(e) {
    const value = e.target.value;
    setSearchResult(copyStudents);
    setSearch(value);
    searchFilter(value);
  }

  return (
    <input
      id="searchbar"
      type="text"
      placeholder="Search Students..."
      value={search}
      onChange={(event) => {
        handleSearch(event);
      }}
    />
  );
}

export default SearchBar;
