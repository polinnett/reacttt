import React from 'react';
import { DataType } from '../Interfaces/IDataType';
import { Table, Tag, Space, TableColumnsType } from 'antd';

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href='.'>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a href='.'>Invite {record.name}</a>
        <a href='.'>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    phoneNumber: '7-777-777-77',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    phoneNumber: '7-777-777-77',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    phoneNumber: '7-777-777-77',
  },
  {
    key: '4',
    name: 'Vladislav',
    age: 20,
    address: 'Pryanishnikov street 2A',
    tags: ['unforgettable', 'student'],
    phoneNumber: '7-777-777-77',
  },
  {
    key: '5',
    name: 'Polina',
    age: 20,
    address: 'Pryanishnikov street 20A',
    tags: ['unforgettable', 'student'],
    phoneNumber: '7-777-777-77',
  },
];

export const UsersTable = () => <Table columns={columns} dataSource={data} />;