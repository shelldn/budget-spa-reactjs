export const addCategory = () => ({
  type: 'budget-io/categories/ADD'
});

export const deleteCategory = (id) => ({
  type: 'budget-io/categories/DELETE',
  payload: { id }
});
