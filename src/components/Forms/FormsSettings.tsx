import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import DateFilter from '@inovua/reactdatagrid-community/DateFilter';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';
import { TiTick } from 'react-icons/ti';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Statuses } from '../../helpers/Statuses';
import { RequiredActions } from '../../helpers/RequiredActions';

export const customFilterTypes = Object.assign(
  {},
  ReactDataGrid.defaultProps.filterTypes,
  {
    requiredAction: {
      name: 'requiredAction',
      operators: [
        {
          name: 'arr',
          fn: ({
            value,
            filterValue,
          }: {
            value: string[];
            filterValue: string;
          }) => {
            const containsFilterValue: boolean = value.includes(filterValue);
            return filterValue ? containsFilterValue : !containsFilterValue;
          },
        },
      ],
    },
  }
);

export const COLUMNS = [
  {
    name: 'name',
    header: 'Form Name',
    minWidth: 100,
    defaultFlex: 2,
    filterEditorProps: {
      placeholder: 'Search template',
    },
  },
  { name: 'reference', header: 'Reference', minWidth: 50, defaultFlex: 1 },
  {
    name: 'created',
    header: 'Created',
    minWidth: 50,
    defaultFlex: 1,
    dateFormat: 'YYYY-MM-DD',
    filterEditor: DateFilter,
    filterEditorProps: {
      placeholder: 'Select date',
      dateFormat: 'MM-DD-YYYY',
    },
  },
  { name: 'deadline', header: 'Deadline', minWidth: 50, defaultFlex: 1 },
  { name: 'modified', header: 'Modified by', minWidth: 100, defaultFlex: 2 },
  {
    name: 'lastModification',
    header: 'Last modification date',
    minWidth: 50,
    defaultFlex: 1,
  },
  {
    name: 'status',
    header: 'Status',
    minWidth: 25,
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: 'Status: all',
      dataSource: Object.values(Statuses).map((e) => {
        return { id: e, label: e };
      }),
    },
    render: ({ value }: { value: string }) => (
      <div className={`status-${value.replace(/\s+/g, '')}`}>{value}</div>
    ),
  },
  {
    name: 'result',
    header: 'Result',
    minWidth: 25,
    defaultFlex: 1,
    render: ({ value }: { value: string }) =>
      value === 'done' && (
        <div className="result-done">
          <TiTick size={30} color="#44c75e" />
        </div>
      ),
  },
  {
    name: 'requiredAction',
    header: 'Required action',
    minWidth: 100,
    defaultFlex: 1.5,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: 'Required action: all',
      dataSource: Object.values(RequiredActions).map((e) => {
        return { id: e, label: e };
      }),
    },
    render: ({ value }: { value: string[] }) => (
      <>
        {value.slice(0, 2).map((e, index) => (
          <div className="requiredAction-element" key={index}>
            {e.charAt(0).toUpperCase() + e.slice(1)}
          </div>
        ))}
        {value.length > 2 && (
          <div className="requiredAction-element">+{value.length - 2}</div>
        )}
      </>
    ),
  },
  {
    name: '',
    header: '',
    minWidth: 100,
    defaultFlex: 0.5,
    render: () => (
      <a href="/details">
        <div className="details-button">
          <MdOutlineKeyboardArrowRight size={25} color="gray" />
        </div>
      </a>
    ),
  },
];

export const filterValue = [
  { name: 'name', operator: 'contains', type: 'string', value: '' },
  { name: 'created', operator: 'eq', type: 'date', value: '' },
  { name: 'status', operator: 'eq', type: 'string', value: '' },
  {
    name: 'requiredAction',
    operator: 'arr',
    type: 'requiredAction',
    value: '',
  },
];

export const GRID_STYLE = { minHeight: 550 };
