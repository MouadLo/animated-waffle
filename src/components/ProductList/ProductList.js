import React, { Component }  from 'react';

import { Table } from '../Table/table'


class ProductList extends Component {
    render() {
        return (
            <Table>
            <Table.Head>
              <Table.TR>
                        <Table.TH>Product Name</Table.TH>
                        <Table.TH>Supplier Name</Table.TH>
                        <Table.TH>Quantity</Table.TH>
              </Table.TR>
            </Table.Head>
            <Table.Body>
                <Table.TR>
                        <Table.TD>Coca Cola 33</Table.TD>
                        <Table.TD>Coca Cola Ltd</Table.TD>
                        <Table.TD>26</Table.TD>
                </Table.TR>
                <Table.TR>
                        <Table.TD>Heets</Table.TD>
                        <Table.TD>Philip Moriss</Table.TD>
                        <Table.TD>78</Table.TD>
                </Table.TR>
                <Table.TR>
                        <Table.TD>Zipo</Table.TD>
                        <Table.TD>Bazar Ltd</Table.TD>
                        <Table.TD>8</Table.TD>
                </Table.TR>
                <Table.TR>
                        <Table.TD>Camel</Table.TD>
                        <Table.TD>NATC</Table.TD>
                        <Table.TD>24</Table.TD>
                </Table.TR>
            </Table.Body>
          </Table>
        )
    }
}

export default ProductList;
