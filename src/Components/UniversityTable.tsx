import { Table } from "antd";
import { styled } from "styled-components";
import {useUniversityData} from '../hooks/useUniversityData'
import { columns } from "../Interfaces/IUnivData";

const Button = styled.button``;


export const UniversityTable = () => {
    const {page, setPage, loading, dataSource } = useUniversityData();
  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <Button onClick={() => setPage(page - 1)} disabled={page === 1 || loading === true }>
        Назад
      </Button>
      <Button onClick={() => setPage(page + 1)} disabled={loading=== true}>Вперед</Button>
      <p>Текущая страница: {page}</p>
    </>
  );
};
