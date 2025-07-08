export const checkResponse = (
  res: Response
): { res: Response | null; error: Error | null } => {
  if (!res.ok) {
    return {
      res: res,
      error: new Error(`HTTP error! Status: ${res.status}`),
    };
  }
  return {
    res: res,
    error: null,
  };
};
