import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DataContext from "../DataContext";

const Filters = () => {
  const {
    setFilterData,
    handleFavClick,
    handleAllClick,
    allSubmission,
    favSubmission,
    filterData,
    searchParam,
    setSearchParam,
    setItemData,
    itemData,
  } = useContext(DataContext);

  let newFilterData = [...itemData];

  const handleDropDownChange = (e) => {
    if (e.target.value === "newest") {
      const newestFilterData = [...itemData].sort(
        (a, b) => new Date(b.startDate) - new Date(a.startDate)
      );
      setItemData(newestFilterData);
    }
    if (e.target.value === "oldest") {
      const oldestFilterData = [...itemData].sort(
        (a, b) => new Date(a.startDate) - new Date(b.startDate)
      );
      setItemData(oldestFilterData);
    }
  };
  const handleSearch = (e) => {
    setSearchParam(e.target.value);
  };

  useEffect(() => {
    let filteredData;
    if (searchParam.length) {
      filteredData = newFilterData.filter((item) =>
        item.title.toLowerCase().includes(searchParam)
      );
      setFilterData(filteredData);
    } else if (filterData.length !== itemData.length) {
      setFilterData(itemData);
    }
  }, [searchParam]);

  return (
    <div className="filter">
      <div className="filterContainer">
        <div className="tabContainer">
          <div
            className={`allTabContainer ${allSubmission && "tab-active"}`}
            onClick={handleAllClick}
          >
            All Submissions
          </div>
          <div
            className={`favTabContainer ${favSubmission && "tab-active"}`}
            onClick={handleFavClick}
          >
            Favorite Submissions
          </div>
        </div>
        <div className="utilitiesContainer">
          <div className="searchUtility">
            <AiOutlineSearch />
            <input
              type="search"
              placeholder="Search"
              name="searchFilter"
              id="searchFilter"
              value={searchParam}
              onChange={handleSearch}
            />
          </div>
          <div className="selectUtility">
            <select
              name="filter"
              id="selectFilter"
              defaultValue={"DEFAULT"}
              onChange={handleDropDownChange}
            >
              <option disabled value="DEFAULT">
                Select
              </option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
