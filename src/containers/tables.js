import React, { useState }from 'react';
import Tables from '../components/tables';

export default function Table() {

    return (
        <Tables.Edge>
            <Tables.Table>
                <Tables.Head>
                    <Tables.Row>
                    <Tables.Labels>Cluster Name</Tables.Labels>
                    <Tables.Labels>Host Name</Tables.Labels>
                    <Tables.Labels>Application</Tables.Labels>
                    <Tables.Labels>Status</Tables.Labels>
                    <Tables.Labels>Message</Tables.Labels>
                    <Tables.Labels>Health Check ID</Tables.Labels>
                    <Tables.Labels>Latency(ms)</Tables.Labels>
                    </Tables.Row>
                </Tables.Head>
            </Tables.Table>
        </Tables.Edge>
    )
};