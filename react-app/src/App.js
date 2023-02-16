import React, { Component } from 'react';
import FilterBar from './FilterBar';
import FilterModal from './FilterModal';
import PropertyCard from './PropertyCard';
import NoProperty from './NoProperty';
import { base_path } from './utils.js';

class App extends Component {

    state = {
        properties: [],
        sort: "none",
        filter: {
            gender: "none"
        }
    };

    componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const city_name = params.get('city');

        fetch(`${base_path}/api/get_properties_by_city.php?city=${city_name}`)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    properties: responseData
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    toggleInterested = property_id => {
        fetch(`${base_path}/api/toggle_interested.php?property_id=${property_id}`)
            .then(response => response.json())
            .then(responseData => {
                if (responseData.success) {
                    console.log('Success');
                    this.updateInterested(property_id);
                } else if (!responseData.success && !responseData.is_logged_in) {
                    console.log('Not logged in!');
                    window.$("#login-modal").modal("show");
                }
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    updateInterested = property_id => {
        let updated_properties = [...this.state.properties];
        updated_properties.forEach((property) => {
            if (property.id === property_id) {
                property.is_interested = !property.is_interested;
                if (property.is_interested) {
                    property.interested_users_count++;
                } else {
                    property.interested_users_count--;
                }
            }
        });

        this.setState({
            properties: updated_properties
        });
    }

    updateSort = sort => {
        this.setState({
            sort: sort
        });
    }

    updateFilter = gender => {
        this.setState({
            filter: {
                gender: gender
            }
        });
    }

    render() {
        let properties = [...this.state.properties];

        // Sorting
        if (this.state.sort !== "none") {
            if (this.state.sort === "desc") {
                properties.sort((a, b) => b.rent - a.rent);
            } else {
                properties.sort((a, b) => a.rent - b.rent);
            }
        }

        // Filter
        if (this.state.filter.gender !== "none") {
            properties = properties.filter(property =>
                property.gender === this.state.filter.gender
            );
        }

        let property_cards;
        if (properties.length > 0) {
            property_cards = properties.map(property =>
                <PropertyCard
                    key={property.id}
                    property={property}
                    toggleInterested={() => this.toggleInterested(property.id)}
                />
            );
        } else {
            property_cards = <NoProperty />;
        }


        return (
            <>
                <div className="page-container">
                    <FilterBar
                        currentSort={this.state.sort}
                        updateSort={this.updateSort}
                        currentFilter={this.state.filter}
                    />

                    {property_cards}
                </div>

                <FilterModal
                    currentFilter={this.state.filter}
                    updateFilter={this.updateFilter}
                />
            </>
        );
    }
}

export default App;
