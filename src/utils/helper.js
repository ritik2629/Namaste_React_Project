export const filterData = (searchText, allResaturants) => {
  const filter = allResaturants.filter((item) =>
    item?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filter;
};
