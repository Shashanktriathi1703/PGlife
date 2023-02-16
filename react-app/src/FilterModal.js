import React from 'react';

const FilterModal = props => {
    return (
        <div className="modal fade" id="filter-modal" tabIndex="-1" role="dialog" aria-labelledby="filter-heading" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="filter-heading">Filters</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <h5>Gender</h5>
                        <hr />
                        <div>
                            <button className={"btn btn-outline-dark" + (props.currentFilter.gender === "none" ? " btn-active" : "")} onClick={() => props.updateFilter("none")}>
                                No Filter
                            </button>
                            <button className={"btn btn-outline-dark" + (props.currentFilter.gender === "unisex" ? " btn-active" : "")} onClick={() => props.updateFilter("unisex")}>
                                <i className="fas fa-venus-mars"></i>Unisex
                            </button>
                            <button className={"btn btn-outline-dark" + (props.currentFilter.gender === "male" ? " btn-active" : "")} onClick={() => props.updateFilter("male")}>
                                <i className="fas fa-mars"></i>Male
                            </button>
                            <button className={"btn btn-outline-dark" + (props.currentFilter.gender === "female" ? " btn-active" : "")} onClick={() => props.updateFilter("female")}>
                                <i className="fas fa-venus"></i>Female
                            </button>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button data-dismiss="modal" className="btn btn-success">Okay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterModal;