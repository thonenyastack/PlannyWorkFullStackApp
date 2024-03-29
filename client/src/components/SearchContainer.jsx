import { FormRow, FormRowSelect } from "./ComponentIndex";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useState, useMemo, useRef, useEffect } from "react";

// Todo: Implement Optimized Search Features.

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");
  const foucsRef = useRef(null);
  const {
    isLoading,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    resetFilters,
  } = useAppContext();

  useEffect(() => {
    foucsRef.current.focus();
  }, []);
  const handleSearch = (e) => {
    // if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    resetFilters();
  };

  const debounce = () => {
    let timeoutID;

    return function (e) {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleChange({ name: "search", value: e.target.value });
      }, 1000);
    };
  };
  // Todo: Refactor debounce function
  // Todo: Try pass search value into useMemo dep array
  // Todo: if does not work, refactor debounce into custom hooks like useDebounce
  const cachedSearch = useMemo(() => debounce(), []);
  return (
    <Wrapper>
      <form className="form">
        <h5> Search </h5>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={cachedSearch}
            ref={foucsRef}
          />

          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />

          <FormRowSelect
            labelText="Type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Reset
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
