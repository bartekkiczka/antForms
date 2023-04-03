import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import moment from 'moment';
import {
  COLUMNS,
  customFilterTypes,
  filterValue,
  GRID_STYLE,
} from './FormsSettings';
import '@inovua/reactdatagrid-community/index.css';
import './forms.css';
import data from './data.json';

window.moment = moment;

const Forms = () => {
  return (
    <div>
      <ReactDataGrid
        enableFiltering
        filterTypes={customFilterTypes}
        columns={COLUMNS}
        dataSource={data.data}
        defaultFilterValue={filterValue}
        style={GRID_STYLE}
      />
    </div>
  );
};
export default Forms;
