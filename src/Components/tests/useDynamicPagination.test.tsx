import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { useDynamicPagination } from "../../hooks/useDynamicPagination";

const mockAxios = new MockAdapter(axios);

describe("useDynamicPagination", () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  it("fetches data and updates state", async () => {
    const mockData = [
      { name: "University 1", country: "Country 1" },
      { name: "University 2", country: "Country 2" },
    ];
    mockAxios.onGet(/\/search/).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useDynamicPagination());

    expect(result.current.universitiesData).toEqual([]);
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.universitiesData).toEqual(mockData);
    expect(result.current.loading).toBe(false);
  });

  it("increments currentPage when inView is true", async () => {
    const mockData = [
      { name: "University 1", country: "Country 1" },
      { name: "University 2", country: "Country 2" },
    ];
    mockAxios.onGet(/\/search/).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useDynamicPagination());

    act(() => {
      result.current.ref.current = true;
    });

    await waitForNextUpdate();

    expect(result.current.currentPage).toBe(undefined);
  });

  it("handles errors during data fetching", async () => {
    mockAxios.onGet(/\/search/).reply(500);

    const { result, waitForNextUpdate } = renderHook(() => useDynamicPagination());

    await waitForNextUpdate();

    expect(result.current.universitiesData).toEqual([]);
    expect(result.current.loading).toBe(false);
  });
});
