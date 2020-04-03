import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as listActions from 'store/list/actions';

const ContainerContext = createContext();

export const ContainerContextProvider = (props) => {
  const { children } = props;
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  const [renderedList, setRenderedList] = useState(list);

  const toggleItem = (item) => {
    const newItem = item;
    newItem.checked = !newItem.checked;
    dispatch(listActions.edit(newItem));
  };

  const togleFinished = (item) => {
    const newItem = item;
    newItem.done = !newItem.done;
    dispatch(listActions.edit(newItem));
  };

  const deleteItem = (item) => {
    dispatch(listActions.deleteItem(item));
  };

  const filterItems = (term) => {
    const newList = [...list].filter(
      (item) => JSON.stringify(item)
        .toLocaleLowerCase()
        .indexOf(term) > -1,
    );
    setRenderedList(newList);
  };

  const values = {
    insideContainer: true,
    list,
    toggleItem,
    togleFinished,
    deleteItem,
    renderedList,
    filterItems,
  };

  return <ContainerContext.Provider value={values}>{children}</ContainerContext.Provider>;
};

ContainerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ContainerContextConsumer = ContainerContext.Consumer;
export default ContainerContextProvider;
