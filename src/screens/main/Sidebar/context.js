import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { findIndex, propEq } from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import * as listActions from 'store/list/actions';

const SidebarContext = createContext();

export const SidebarContextProvider = (props) => {
  const { children } = props;
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  const [hasChecked, setHasChecked] = useState(false);
  const [newItemModal, toggleNewItemModal] = useState(false);
  const [newItemName, setNewItemName] = useState('');

  useEffect(() => {
    const checkedItems = findIndex(propEq('checked', true), list) > -1;
    setHasChecked(checkedItems);
  }, [list]);

  const deletSelectedItems = () => {
    const checkedItems = [...list].filter((item) => item.checked);
    dispatch(listActions.deletSelectedItems(checkedItems));
  };

  const addItem = () => {
    dispatch(listActions.addItem(newItemName));
    setNewItemName('');
  };

  const values = {
    deletSelectedItems,
    hasChecked,
    insideSidebar: true,
    newItemModal,
    toggleNewItemModal,
    newItemName,
    setNewItemName,
    addItem,
  };
  return <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>;
};

SidebarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SidebarContextConsumer = SidebarContext.Consumer;
export default SidebarContextProvider;
