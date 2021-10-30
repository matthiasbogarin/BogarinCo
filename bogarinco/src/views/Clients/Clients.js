import React from "react";
import { Table } from "../../components/Table";

const Clients = props => {
    return (
        <div style={{ textAlign: "center", backgroundColor: "grey", height: "92.43vh", width: "100vw", marginTop: '-10px' }}>
            <div style={{maxHeight:'100%' , overflow:'auto'}}>
                <Table />
            </div>
        </div>
    );
};

export default Clients;