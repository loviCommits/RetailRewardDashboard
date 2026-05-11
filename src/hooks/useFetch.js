import { useEffect, useState } from "react";

const useFetch = (apiCall) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true);

        const response = await apiCall();

        setData(response || []);

      } catch (err) {

        setError(
          err?.message ||
          "Something went wrong"
        );

      } finally {

        setLoading(false);
      }
    };

    if (typeof apiCall === "function") {
      fetchData();
    } else {
      setError("Invalid API function");
      setLoading(false);
    }

  }, [apiCall]);

  return {
    data,
    loading,
    error
  };
};

export default useFetch;