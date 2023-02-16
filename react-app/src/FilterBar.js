import React from 'react';
import { base_path } from './utils.js';

const FilterBar = props => {
    return (
        <div className="filter-bar row justify-content-around">
            <div className={"col-auto" + (props.currentFilter.gender !== "none" ? " sort-active" : "")} data-toggle="modal" data-target="#filter-modal">
                <img src={base_path + "/img/filter.png"} alt="filter" />
                <span>Filter</span>
            </div>
            <div className={"col-auto" + (props.currentSort === "desc" ? " sort-active" : "")} onClick={() => props.updateSort("desc")}>
                <img src={base_path + "/img/desc.png"} alt="sort-desc" />
                <span>Highest rent first</span>
            </div>
            <div className={"col-auto" + (props.currentSort === "asc" ? " sort-active" : "")} onClick={() => props.updateSort("asc")}>
                <img src={base_path + "/img/asc.png"} alt="sort-asc" />
                <span>Lowest rent first</span>
            </div>
        </div>
    );
}

export default FilterBar;