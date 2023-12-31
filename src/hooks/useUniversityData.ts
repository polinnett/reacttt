import { useState, useEffect } from "react";
import { DataType } from "../Interfaces/IUnivData";
import axios from "axios";

export const useUniversityData = () => {
  const LIMIT_LIST_SCHOOL = 10;
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  

  const getUniversity = async (page: number, limit: number) => {
    const offset = (page - 1) * limit
    try {
      setLoading(true);
      const response = await axios.get(
        `http://universities.hipolabs.com/search?limit=${limit}&offset=${offset}`
      );
      setDataSource(response.data);
    } catch (error) {
      console.error(`Ошибка при получении информации: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL);
  }, [page]);

  return {
    page,
    setPage,
    loading,
    dataSource,
  };
};
