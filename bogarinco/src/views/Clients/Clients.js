import React from "react";
import { Table } from "../../components/Table";

const Clients = props => {
    return (
        <div style={{ textAlign: "center", backgroundColor: "grey", height: "92.43vh", width: "100vw", marginTop: '-20px' }}>
            <h3 style={{ paddingTop: "5%"}}>Clients</h3>
            <p>This is the Clients View</p>
            <div>
                <Table />
            </div>
        </div>
    );
};

export default Clients;